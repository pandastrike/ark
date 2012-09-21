global = (->

  base64Decode = (string) -> window.atob  string
    
  filesystem:
    root: <%- JSON.stringify(@root) %>
    content: <%- JSON.stringify(@content) %>
    native_modules: <%- JSON.stringify(@native_modules) %>
    read: (reference) ->
      reference = reference.__ref if reference.__ref?
      base64Decode global.filesystem.content[reference]
      
)()    

process = ( ->
  scopes =
    evals:
      NodeScript: 
        runInThisContext: (source,filename,returnResult) -> 
          eval source
        runInNewContext: (source,filename,returnResult) -> 
          console.log "WARNING: runInNewContext doesn't work in the browser."
          eval source

  platform: "browser"
  moduleLoadList: []
  env: {}
  argv: ["node","/"]
  binding: (scope) ->
   scopes[scope]
  cwd: () -> "/"
)()

# 
# NativeModule
# 
# Adapted from node source
#

NativeModule = ( ->

  runInThisContext = process.binding('evals').NodeScript.runInThisContext

  `  
  function NativeModule(id) {
    this.filename = id + '.js';
    this.id = id;
    this.exports = {};
    this.loaded = false;
  }

  NativeModule._source = {}
  NativeModule._cache = {};

  NativeModule.require = function(id) {
    if (id == 'native_module') {
      return NativeModule;
    }

    var cached = NativeModule.getCached(id);
    if (cached) {
      return cached.exports;
    }

    if (!NativeModule.exists(id)) {
      throw new Error('No such native module ' + id);
    }

    process.moduleLoadList.push('NativeModule ' + id);

    var nativeModule = new NativeModule(id);

    nativeModule.compile();
    nativeModule.cache();

    return nativeModule.exports;
  };

  NativeModule.getCached = function(id) {
    return NativeModule._cache[id];
  }

  NativeModule.exists = function(id) {
    return NativeModule._source.hasOwnProperty(id);
  }

  NativeModule.getSource = function(id) {
    return NativeModule._source[id];
  }

  NativeModule.wrap = function(script) {
    return NativeModule.wrapper[0] + script + NativeModule.wrapper[1];
  };

  NativeModule.wrapper = [
    '(function (exports, require, module, __filename, __dirname) { ',
    '\n});'
  ];

  NativeModule.prototype.compile = function() {
    var source = NativeModule.getSource(this.id);
    source = NativeModule.wrap(source);
    var fn = runInThisContext(source, this.filename, true);
    fn(this.exports, NativeModule.require, this, this.filename);

    this.loaded = true;
  };

  NativeModule.prototype.cache = function() {
    NativeModule._cache[this.id] = this;
  };
  `

  #
  # Bootstrap native modules
  #

  for name, ref of global.filesystem.native_modules
    NativeModule._source[name] = global.filesystem.read(ref)

  NativeModule

)()

#
# fs
#

( ->
  
  getFile = (path) ->
    parts = path.split("/")[1..]
    file = global.filesystem.root
    for part in parts
      if not (file = file[part])
        throw "File not found at '#{path}'"
    file

  class Stat
    constructor: (path) -> @file = getFile(path)
    isDirectory: () -> 
      @file.__stat.type == "directory"
    isFile: () -> @file.__stat.type == "file"
    isSymbolicLink: () -> false

  base64Decode = (string) ->
    decodeURIComponent escape window.atob string
    
  fs =
    readFileSync: (path,encoding) ->
      file = getFile(path)
      global.filesystem.read(file)

    statSync: (path) ->
      new Stat(path)

    lstatSync: (path) -> @statSync(path)

    # realpathSync adapted from Node source
    realpathSync: `function realpathSync(p, cache) {

      var isWindows = process.platform === 'win32';

      // Regexp that finds the next partion of a (partial) path
      // result is [base_with_slash, base], e.g. ['somedir/', 'somedir']
      if (isWindows) {
        var nextPartRe = /(.*?)(?:[\/\\]+|$)/g;
      } else {
        var nextPartRe = /(.*?)(?:[\/]+|$)/g;
      }

      // Regex to find the device root, including trailing slash. E.g. 'c:\\'.
      if (isWindows) {
        var splitRootRe = /^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/][^\\\/]+)?[\\\/]*/;
      } else {
        var splitRootRe = /^[\/]*/;
      }

      var pathModule = NativeModule.require("path");
      var normalize = pathModule.normalize;

      // make p is absolute
      p = pathModule.resolve(p);

      if (cache && Object.prototype.hasOwnProperty.call(cache, p)) {
        return cache[p];
      }

      var original = p,
          seenLinks = {},
          knownHard = {};

      // current character position in p
      var pos;
      // the partial path so far, including a trailing slash if any
      var current;
      // the partial path without a trailing slash (except when pointing at a root)
      var base;
      // the partial path scanned in the previous round, with slash
      var previous;

      start();

      function start() {
        // Skip over roots
        var m = splitRootRe.exec(p);
        pos = m[0].length;
        current = m[0];
        base = m[0];
        previous = '';

        // On windows, check that the root exists. On unix there is no need.
        if (isWindows && !knownHard[base]) {
          fs.lstatSync(base);
          knownHard[base] = true;
        }
      }

      // walk down the path, swapping out linked pathparts for their real
      // values
      // NB: p.length changes.
      while (pos < p.length) {
        // find the next part
        nextPartRe.lastIndex = pos;
        var result = nextPartRe.exec(p);
        previous = current;
        current += result[0];
        base = previous + result[1];
        pos = nextPartRe.lastIndex;

        // continue if not a symlink
        if (knownHard[base] || (cache && cache[base] === base)) {
          continue;
        }

        var resolvedLink;
        if (cache && Object.prototype.hasOwnProperty.call(cache, base)) {
          // some known symbolic link.  no need to stat again.
          resolvedLink = cache[base];
        } else {
          var stat = fs.lstatSync(base);
          if (!stat.isSymbolicLink()) {
            knownHard[base] = true;
            if (cache) cache[base] = base;
            continue;
          }

          // read the link if it wasn't read before
          // dev/ino always return 0 on windows, so skip the check.
          var linkTarget = null;
          if (!isWindows) {
            var id = stat.dev.toString(32) + ':' + stat.ino.toString(32);
            if (seenLinks.hasOwnProperty(id)) {
              linkTarget = seenLinks[id];
            }
          }
          if (linkTarget === null) {
            fs.statSync(base);
            linkTarget = fs.readlinkSync(base);
          }
          resolvedLink = pathModule.resolve(previous, linkTarget);
          // track this, if given a cache.
          if (cache) cache[base] = resolvedLink;
          if (!isWindows) seenLinks[id] = linkTarget;
        }

        // resolve the link, then start over
        p = pathModule.resolve(resolvedLink, p.slice(pos));
        start();
      }

      if (cache) cache[original] = p;

      return p;
    }`


  fs_module = new NativeModule("fs")
  fs_module.loaded = true
  fs_module.exports = fs
  NativeModule._source["fs"] = ""
  NativeModule._cache["fs"] = fs_module
  
)()

# Start the main script
NativeModule.require("module").runMain()