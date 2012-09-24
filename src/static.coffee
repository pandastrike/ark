# We return a list of pathnames based on static dependency analysis.

# ## Native Modules

# We define a bunch of utility functions from the native (bulit-in) Node
# modules, mostly for readability.
FileSystem = require "fs"
read = (path) -> FileSystem.readFileSync(path,'utf-8')
print = console.log

{dirname,basename,extname,join,resolve} = require "path"

# ## Package Modules

# Detective does the heavy-lifting of actually parsing the JavaScript files
# and finding the `require` statements.
detective = require "detective"

# We need to compile the CoffeeScript we encounter so that detective knows
# what to do with it.
CoffeeScript = require "coffee-script"
compile = (source) -> CoffeeScript.compile source

# ## Local Modules 

# We have our [local version of Module][local-module]. That should probably be
# renamed to avoid confusion. We use three functions: `_nodeModulePaths` (when
# constructing modules), `_resolveFilename`, and `_isNative`. The underscores
# are misleading, since they aren't really private functions (which is partly
# why we have our own version instead of just using Node's `module` package
# directly.)
# [local-module][./module.html]
Module = require "./module"
module_paths = Module._nodeModulePaths
resolve_filename = Module._resolveFilename
native_module = (path) -> Module._isNative path

# ## Helper Functions

# A conveniet way to read `package.json` files. Returns the JavaScript object
# associated with the package file.
read_package = (path) ->
  JSON.parse read resolve path,"package.json"

# Simple utility function to ensure we don't return duplicate dependencies.
uniq = (array) ->
  hash = {}
  hash[element] = true for element in array
  Object.keys(hash)

# Construct a module and assign it the correct filename and paths. For some
# reason, there's nothing in Module that does precisely this.
create_module = (path,parent) ->

  directory = dirname path
  extension = extname path
  id = join directory, (basename path, extension)

  module = new Module(id,parent)
  module.filename = path
  module.paths = module_paths directory

  module

# ## The `dependencies` Function

# And now for the main event. We take a path and return a list of
# dependencies. We find the dependencies by starting with the package `main`
# file and then taking it's dependencies and checking them, and so on, until
# there's no more files to check. Currently, we don't check for cycles,
# although they'd still be possible even if we did, because our version of
# Module doesn't resolve symlinks.

dependencies = (path) ->
  # Start with the `main` file of the package.
  path = resolve path, (read_package path).main
  # Add the main file to the list of files we'll return. Arguably, the caller
  # should do this. On the other hand, you could argue that the main file is
  # itself a dependency. Whatever. For right now, we're doing it here.
  paths = [ path ]
  # We're also going to return the list of native modules.
  native_modules = []
  
  # The "real" dependency function, which gets called recursively, incorporating
  # `paths` and `native_modules` via closure.  
  _dependencies = (path,parent) ->
    # We start by simply reading the source code.
    source = read path
    # We check the extension to see if we need to compile it. Right now, we just
    # hardcode this for CoffeeScript. We should probably adopt the approach taken
    # in the `[ark.coffee][ark]` source.
    # [ark][./ark.html]
    if (extname path) == ".coffee"
      source = compile source
    # Construct a module for the current file.
    module = create_module path, parent
    # Ask detective to give us the dependencies and then, for each one, we're
    # going to:    
    for reference in (detective source)
      # * Get the actual pathname (rather than the reference).
      dependent_path = resolve_filename reference, module
      # * Check to see if it's a native module.
      unless native_module dependent_path
        #   * If it's a local package, save the pathname and check it's dependencies.        
        paths.push dependent_path
        _dependencies(dependent_path,module)
      else
        #   * Otherwise, add it to the list of native modules.
        native_modules.push dependent_path
        
  # Start the recursion, beginning with our package `main`.
  _dependencies path

  # Remove any duplicates and return the result.
  [(uniq paths),(uniq native_modules)]
    
module.exports =
  dependencies: dependencies