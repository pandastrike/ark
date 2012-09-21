# This is the beginning of the static dependency analysis feature. Currently
# just dumps paths of dependencies to stdout, but we will turn this into a
# function that returns a manifest for use with Ark

FileSystem = require "fs"
read = (path) -> FileSystem.readFileSync(path,'utf-8')

# TODO: clone Module source so we don't have to worry about things breaking
# between releases. We can do this because the dependency loading is locked
# down as part of the Module interface and so it won't, even if the internal
# implementation does.
Module = require "module"
module_paths = Module._nodeModulePaths
resolve_filename = Module._resolveFilename

{dirname,basename,extname,join,resolve} = require "path"

detective = require "detective"

CoffeeScript = require "coffee-script"
compile = (source) -> CoffeeScript.compile source

read_package = (path) ->
  JSON.parse read resolve path,"package.json"

# this depends on getting an absolute path back from resolveFilename - for
# native modules, we just get back the module name
native_module = (path) -> path[0] != "/"

create_module = (path,parent) ->

  directory = dirname path
  extension = extname path
  id = join directory, (basename path, extension)

  module = new Module(id,parent)
  module.filename = path
  module.paths = module_paths directory

  module

dependencies = (path) ->
  path = resolve path, (read_package path).main
  paths = []
  _dependencies = (path,parent) ->
    source = read path
    if (extname path) == ".coffee"
      source = compile source
    module = create_module path, parent
    for reference in (detective source)
      dependent_path = resolve_filename reference, module
      unless native_module dependent_path
        paths.push dependent_path
        _dependencies(dependent_path,module)
  _dependencies path
  paths
    
module.exports =
  dependencies: dependencies