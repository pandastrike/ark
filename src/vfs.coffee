{join, resolve, dirname, basename, extname, sep} = require "path"
{async, read, stat, base64, md5, keys} = require "fairmont"

# We need to do CoffeeScript compilation
CoffeeScript = require "coffee-script"

# We use `eco` as a template engine when generating code.
Eco = require "eco"
render = (template, context) -> Eco.render( template, context )

# Stat info that is applicable to the browser
bstat = async (path) ->
  _stat = yield stat path
  {atime,ctime,mtime,size} = _stat
  type = if _stat.isDirectory() then "directory" else "file"
  {atime, ctime, mtime, size, type}


# Take a block of code and turn it into a module.
modularize = do ->
 template = read resolve __dirname, "templates", "module.js"
 async (code, path) -> render (yield template), {code, path}

_extname = extname
extname = (path) -> _extname(path)[1..]

# Virtual File System
class VFS

  @compilers:
    coffee: (code) -> CoffeeScript.compile(code, bare: true)
    js: (code) -> code

  constructor: (@path, @logger) ->
    @root = {}
    @content = {}
    @modules = api: {}, function: {}
    # default to no-op logger
    @logger ?= ->
    @compilers = VFS.compilers

  get: (path) ->
    here = @root
    directory = dirname path
    unless directory == "."
      for part in directory.split sep
        here = here?[part]
    here?[basename(path)]

  addFile: async (path) ->
    @logger "Adding file [#{path}]"

    directory = dirname path
    filename = basename path
    extension = extname path

    # Generate a reference to the content. Avoid storing it twice
    # under different pathnames.
    localPath = resolve @path, path
    info = yield stat localPath
    return unless info.isFile()
    record = @get path
    vinfo = record?.__stat
    if vinfo?.mtime.getTime() == info.mtime.getTime()
      @logger "File [#{path}] already added and remains unchanged."
      return
    content = yield read localPath
    reference = md5 content

    # Store a reference to the content, possibly compiling it first.
    unless extension in keys @compilers
      @content[reference] = base64 content
    else
      compile = @compilers[extension]
      @content[reference] = base64 reference
      @modules.function[reference] = (yield modularize (compile content), path)

    # Add the reference into the directory hierarchy.
    here = @root
    unless directory == "."
      cwd = resolve @path
      for part in directory.split sep
        cwd = join cwd, part
        here = here[part] ?= __stat: bstat cwd
    here[filename] = __stat: (yield bstat localPath), __ref: reference

  addAPI: async (name) ->
    @logger "Adding API [#{name}]"

    if @modules.api[name]?
      @logger "API [#{name}] already added."
      return
    # We use require's resolve here so we don't have to worry
    # about the extension.
    path = require.resolve join __dirname, "api", name
    code = yield read path
    reference = md5 code
    extension = extname path
    compile = @compilers[extension]

    # Instead of adding the reference to the filesystem has, we add it to a
    # special hash just for api modules.
    @modules.api[name] = reference

    # Add the content like we do with ordinary files
    @content[reference] = base64 reference
    @modules.function[reference] = yield modularize compile code

  toJavaScript: do ->
    template = read resolve __dirname, "templates", "ark.js"
    async -> render (yield template), @

module.exports = VFS
