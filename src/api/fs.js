var Stat, base64Decode, fs, getFile;

getFile = function(path) {
  var file, part, parts, _i, _len;
  parts = path.split("/").slice(1);
  file = global.filesystem.root;
  for (_i = 0, _len = parts.length; _i < _len; _i++) {
    part = parts[_i];
    if (!(file = file[part])) {
      throw "File not found at '" + path + "'";
    }
  }
  return file;
};

Stat = (function() {

  function Stat(path) {
    this.file = getFile(path);
  }

  Stat.prototype.isDirectory = function() {
    return this.file.__stat.type === "directory";
  };

  Stat.prototype.isFile = function() {
    return this.file.__stat.type === "file";
  };

  Stat.prototype.isSymbolicLink = function() {
    return false;
  };

  return Stat;

})();

base64Decode = function(string) {
  return decodeURIComponent(escape(window.atob(string)));
};

var fs = {
  readFileSync: function(path, encoding) {
    var file;
    file = getFile(path);
    return global.filesystem.read(file);
  },
  readdirSync: function(path) {
    var file;
    file = getFile(path);
    if (file.__stat.type === "directory") {
      var result = [];
      for (var key in file) {
        // TODO: this is not a great convention, since it's hardly
        // impossible that a file might start with two underscores
        if (!(/^__/.test(key))) {
          result.push( key );
        }
      }
      return result;
    } else {
      throw "Not a directory: '" + path + "'" ;
    }
  },
  statSync: function(path) {
    return new Stat(path);
  },
  lstatSync: function(path) {
    return this.statSync(path);
  },
  // realpath Sync adapted from Node source
  realpathSync: function realpathSync(p, cache) {

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
  }
};

module.exports = fs;