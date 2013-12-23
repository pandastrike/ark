{join,resolve,dirname,basename,extname,sep} = require "path"
{read,stat,base64,md5} = require "fairmont"

# We need to do CoffeeScript compilation
CoffeeScript = require "coffee-script"

# We use `eco` as a template engine when generating code.
Eco = require "eco"
render = (template,context) -> Eco.render( template, context )

{keys} = Object

# Stat info that is applicable to the browser
bstat = (path) ->
  _stat = stat( path )
  {atime,ctime,mtime,size} = _stat
  type = if _stat.isDirectory() then "directory" else "file"
  {atime,ctime,mtime,size,type}


# Take a block of code and turn it into a module.
modularize = do ->
 template = read(resolve(__dirname, "templates", "module.js"))
 (code,path) -> render(template, {code,path})

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

  addFile: (path) ->
    @logger "Adding file [#{path}]"
    
    directory = dirname path
    filename = basename path
    extension = extname path
    
    # Generate a reference to the content. Avoid storing it twice
    # under different pathnames.
    
    localPath = resolve(@path, path)
    return unless stat(localPath).isFile()
    content = read(localPath)
    reference = md5(content)
    
    # Store a reference to the content, possibly compiling it first.
    unless extension in keys(VFS.compilers)
      @content[reference] = base64(content)
    else
      compile = @constructor.compilers[extension]
      @content[reference] = base64(reference)
      @modules.function[reference] = modularize(compile(content), path)

    # Add the reference into the directory hierarchy.
    here = @root
    unless directory == "."
      cwd = resolve(@path)
      for part in directory.split(sep)
        cwd = join(cwd, part)
        here = here[part] ?= __stat: bstat(cwd)
    here[filename] = __stat: bstat(localPath), __ref: reference

  addAPI: (name) ->
    @logger "Adding API [#{name}]"

    # We use require's resolve here so we don't have to worry
    # about the extension.
    path = require.resolve(join(__dirname, "api", name))
    code = read(path)
    reference = md5(code)
    extension = extname(path)
    compile = VFS.compilers[extension]

    # Instead of adding the reference to the filesystem has, we add it to a
    # special hash just for api modules.            
    @modules.api[name] = reference

    # Add the content like we do with ordinary files
    @content[reference] = base64(reference)
    @modules.function[reference] = modularize(compile(code))
    
  toJavaScript: do ->
    template = read(resolve(__dirname, "templates", "ark.js"))
    -> render(template, @)
    
module.exports = VFS