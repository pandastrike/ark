# This is the beginning of the static dependency analysis feature. Currently
# just dumps paths of dependencies to stdout, but we will turn this into a
# function that returns a manifest for use with Ark

detective = require "detective"
FileSystem = require "fs"
{dirname,basename,extname,join} = require "path"
{log} = console
Module = require "module"
{inspect} = require "util"
read = (path) -> FileSystem.readFileSync(path,'utf-8')
CoffeeScript = require "coffee-script"
compile = (source) -> CoffeeScript.compile source

# this depends on getting an absolute path back from 
# Module._resolveFilename
native_module = (path) -> path[0] != "/"

create_module = (path,parent) ->

  directory = dirname path
  extension = extname path
  id = join directory, (basename path, extension)

  module = new Module(id,parent)
  module.filename = path
  module.paths = Module._nodeModulePaths directory

  module
  
dependencies = (path,parent) ->
  source = read path
  if (extname path) == ".coffee"
    source = compile source
  module = create_module path, parent
  for reference in (detective source)
    dependent_path = Module._resolveFilename(reference, module)
    unless native_module dependent_path
      log dependent_path
      dependencies(dependent_path,module)
    
path = process.argv[2]
dependencies path
    
  