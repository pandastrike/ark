# Implements the main commands - `package` and `manifest`.

# Ark's basic strategy is to bundle up a sort of virtual filesystem so that
# Node's module loading will basically work without changes. The `manifest`
# command gives you a list of the files that will be included in this virtual
# filesystem. The `package` command takes a manifest (either one generated on
# the fly or provided via the command line) and turns into a JavaScript file
# that can be loaded into the browser.

# ## Native Modules

# Some utility functions. Most of these just improve readability. Some of
# these should probably be in their own file, esp. since they show up
# repeatedly in other files.

Util = require "util"

inspect = (thing) -> Util.inspect(thing)

print = console.log

error = (message) -> throw new Error(message)

warn = (message) -> process.stderr.write "#{message}\n"

read = (path) -> FileSystem.readFileSync(path,'utf-8')

readdir = (path) -> FileSystem.readdirSync(path)

readStream = (stream) -> 
  buffer = ""
  fiber = Fiber.current
  stream.resume()
  stream.on "data", (data) -> buffer += data
  stream.on "end", -> fiber.run()
  Fiber.yield()
  buffer

stat = (path) -> FileSystem.statSync(path)

Crypto = require "crypto"

# We md5 the file content and store it in a separate hash instead of storing
# it directly, which ensures we never store the same file twice (which might
# happen if the same package was installed in two different places - which
# could happen, especially since we intentionally don't traverse symlinks when
# resolving package locations).
md5 = (string) -> Crypto.createHash('md5').update(string,'utf-8').digest("hex")

# We base64 stuff to avoid having to worry about what's in the files. That way
# people can package up whatever they want and not worry about it.
base64 = (string) -> new Buffer(string).toString('base64')

FileSystem = require "fs"
Path = require "path"

# ## Package Modules

# We use fibers to make `glob` synchronous - see below.
Fibers = require "fibers"
Future = require "fibers/future"
# **Note** You have to be running in a Fiber for this to work.
make_synchronous = (fn) ->
  fn = Future.wrap fn
  ->
    fn(arguments...).wait()

# Take any function and run it as a fiber. 
run_as_fiber = (fn) ->
  ->
    _arguments = arguments
    Fiber( -> fn(_arguments...) ).run()

# We use `eco` as a template engine when generating code.
Eco = require "eco"
render = (template,context) -> Eco.render template, context

# We also want to do on-the-fly CoffeeScript compilation.
CoffeeScript = require "coffee-script"
compile_coffeescript = (source) -> CoffeeScript.compile source, bare: true

# We use `uglify-js` to minify the code. This elaborate way of defining
# `minify` just keeps the number of variables to a minimum.
minify = (->
  {parser,uglify} = require "uglify-js"
  (code) ->
    ast = parser.parse code
    ast = uglify.ast_mangle ast
    ast = uglify.ast_squeeze ast
    uglify.gen_code ast
)()

# The `glob` package just returns the `glob` function, so we just make it
# synchronous.
glob = make_synchronous require "glob"

# ## Local Modules

# This is actually just adapted from [js-beautify][].
# [js-beautify]: https://github.com/einars/js-beautify
beautify = (->
  _beautify = require "./beautify"
  (code) -> _beautify code, indent_size: 2
)()

# The [local `static` module][static] performs static dependency analysis.
# Basically, we get back an array containing two other arrays. The first is a
# list of file paths of all the files that were necessary to resolve the
# `require` statements. The second is the list of native modules that are
# necessary.
#[static]:static.html
{dependencies} = require "./static"

# ## Helper Functions

# ### `manifest`

# The `manifest` function returns a *manifest*, a Javascript object describing
# the original source directory used to generate the manifest, a list of files
# to include, and a list of native modules to include.

manifest = (options) ->

  {source,extensions} = options

  source = Path.resolve source
  
  # There are two ways to generate a manifest: static dependency analysis (SDA)
  # and crawling the filesystem. The former should almost always be used in
  # production, but you could use the latter method and then manually strip it
  # down. This is particularly useful if you want to include non-source files
  # (although, `.json` files are also included).
  
  # ack, suddenly wrapping text isn't working ...
      
  if options.static? 
    # We start by getting the dependencies based on the package.json in the source
    # directory.
    [paths,native_modules] = dependencies source
    # Make sure we add any package.json files, since these aren't returned as
    # dependencies.
    paths = paths.concat glob "#{source}/**/*.json", {}
    # Make sure that we have the bare minimum native modules required to support
    # module loading - but don't add them if they're already there.   
    for module in "assert util path fs module".split(" ")
      native_modules.push module unless module in native_modules
  else
    # If we just want to crawl the filesystem instead of doing SDA, we just let
    # glob do all the real work.    
    paths = glob "#{source}/**/*.{#{extensions}}", {}
    # Then we just load all the native modules that we can support by looking in
    # the local source directory. All the native modules are in the "node"
    # directory.  
    native_modules = for filename in (readdir Path.resolve __dirname, "node")
      # Make sure to remove the extension to get the actual module name.
      extension = Path.extname filename
      Path.basename filename, extension
      
  # Next, we want to convert the paths to paths in the virtual filesystem we're
  # going to be packaging up, where `/` is the source directory itself.  
  files = []
  # How many of the path components are just needed to get us to the source
  # directory? We want to remove them from our virtual filesystem paths, since
  # the source directory maps to `/`.
  n = source.split("/").length
  for path in paths
    _path = path.split("/")[(n)..].join("/")
    files.push _path

  # And that's a wrap: deliver the manifest.
  source: source
  files: files
  native_modules: native_modules
  
# ### `index`

# The `index` function takes a manifest and returns the JavaScript object
# representing our virtual filesystem. The name `index` is a bit of misnomer
# and should probably be changed to `filesystem`.

# The trick here is that we want to actually include real functions, not just
# strings of the source code. We also don't want to accidentally store
# anything twice, because we want to keep our bandwidth use to a minimum.

# In order to accomplish these goals we create references by hashing the
# content and storing that in separate content hash. If the content appears to
# be source code, we actually replace the source code with the hash and
# dereference it using yet another hash that stores module functions.

# In other words, if you do a fs.readFile* on a source file, you'll actually
# get the hash of the source code back, instead of the source code itself.
# From there you can get the corresponding module function. We do this so that
# the node Module system can work without significant changes. "Compiling"
# source code essentially means derefencing the hash.

index = (manifest) ->
  
  # Here's the data structure we're going to populate.
  filesystem = 
    root: {}
    content: {}
    native_modules: {}
    module_functions: {}
  
  # Define a few helper functions that are specific to this function.
  
  # Resolve a path relative to the source directory.
  resolve = (paths...) ->
    Path.resolve(manifest.source,paths...)

  # Generate the code for a module function. We include the path so that we can
  # embed it as a comment in the source, which might help with debugging.
  template = read("#{__dirname}/templates/module.js")
  module_function = (code,path) ->
    render template, code: code, path: path

  # Set up a hash of compilers based on the extension. This is the beginnings of
  # a more extensible mechanism.  
  identity = (x) -> x
  compilers = 
    ".coffee": compile_coffeescript
    ".js": identity
  
  # Okay, now we're ready to start processing the manifest. First, we just go
  # through the files included in the manifest. We're going to produce a nested
  # a hash that mirrors the filesystem.    
  for path in manifest.files
    # Grab the directory and filename for this file.
    directory = Path.dirname path
    filename = Path.basename path

    # The `tmp` variable here is used as a "current directory" reference. We
    # start, of course, at the filesystem root.    
    tmp = filesystem.root
    
    # Just an array of path components that we use to resolve relative paths.
    # Probably would have been sufficient for this to be a string that we just
    # keep re-resolving with the last path component.    
    cwd = []
    
    # If we're in the current directory that means this file is in the root, which
    # means we can skip navigating down to the right directory (nested hash).    
    unless directory == "."
    
      # Okay, we're not in the current directory, so we need to navigate down to the
      # right directory (nested hash).            
      for part in directory.split("/")
        
        # Keep track of where we are so we can resolve paths.
        cwd.push << part
        
        # If we haven't encountered this "directory" yet, initialize it.
        tmp = tmp[part] ?= {}
        # Capture the stat info for this directory. Much of this is useless: see
        # [issue #18][issue-18].
        # [issue-18]:https://github.com/dyoder/ark/issues/18        
        tmp.__stat ?= stat resolve cwd...
        # Flag it as a directory.
        tmp.__stat.type ?=  "directory"
  
    # Okay, now we've navigated to the right "directory", which means that tmp now
    # points to the directory in which the file belongs. Next, we're going to
    # generate a reference to the file by hashing it. This also ensures we don't
    # store the same content twice.        
    real_path = resolve path
    extension = Path.extname path
    content = read real_path
    reference = md5(content)
    
    # Next, if this is source code, we're going to generate a module function and
    # use the hash itself as a standin for the source code. If it isn't source
    # code, we just store the content directly. We base64 the content so we don't
    # have to worry too much about what's in the file.        
    if extension in Object.keys compilers
      # Grab the compiler based on the extension.
      compile = compilers[extension]
      # Add the content to the `content` hash.
      filesystem.content[reference] = base64(reference)
      # Generate the module function and add it to the `module_functions` hash.
      filesystem.module_functions[reference] = 
        module_function (compile content), path
    else
      filesystem.content[reference] = base64(content)
  
    # Add the file to it's parent directory, including stat information
    tmp[filename] =
      __stat: stat real_path
      __ref: reference
    tmp[filename].__stat.type = "file"  

  # We've now processed all the files, but we still need to add the native
  # modules. We store these the same way as we store any source: hash the source
  # code, add the hash to the content directory, and then add the module
  # function. This uniformity allows us to treat "compiling" source the same
  # way, with minimal changes to the Node implementation for `NativeModule`.
      
  # We have to make sure `stream` is added when `http` is used. For native
  # modules, we don't actually do any dependency analysis, so we have to hard
  # code these kinds of things. All the modules necessary for the module system
  # itself are added by the `manifest` helper function. Arguably, this belongs
  # there as well.    
  if "http" in manifest.native_modules and not ("stream" in manifest.native_modules)
    warn "Automatically adding native module 'stream' because 'http' is being used"
    manifest.native_modules.push "stream"
    
  # So now we have our list of native modules we're going to bundle up.
  for name in manifest.native_modules
    # If anything goes wrong, we want to warn the developer.
    try
      # Resolve the module based on our faux browser modules in the `node`
      # directory. That directory should probably be named `native_modules`.      
      path = require.resolve Path.resolve __dirname, "node", name
      # Read the code at the path we resolved.
      code = read path
      # Grab the extension, so we know which compiler to use.
      extension = Path.extname path
      # Generate the reference.
      reference = md5 code

      # Instead of adding the reference to the filesystem has, we add it to a
      # special hash just for native modules.            
      filesystem.native_modules[name] = reference
      
      # Add the content as hash.
      filesystem.content[reference] = base64 reference
      # Compile the source.
      compile = compilers[extension]
      
      # Generate the module function and add it to the `module_functions` hash.
      filesystem.module_functions[reference] = 
        module_function compile code
    catch e
      warn "Unable to package native module '#{name}'"
  
  # Return the filesystem to the caller.
  filesystem

# ### `code`

# The `code` function takes the filesystem and turns it into a Javascript file
# based on the `node.js` template in the `templates` directory.
code = (filesystem) ->
  template = read("#{__dirname}/templates/node.js")
  render template, filesystem

# ## Main Entry Points

# The `ark` binary calls into the Ark object based on the subcommand. So we
# have a function defined for each subcommand.

Ark =

  # The manifest subcommand basically just calls the `manifest` helper function.
  manifest: (options) ->
    
    # Check the options to make sure we can actually run the command. We could
    # probably do more checking here, although arguably this makes more sense in
    # the actual `manifest` helper function, since the validation is different
    # dependeing on the way the manifest is generated.    
    error "Please provide source directory via --source option" unless options.source?

    # Generate the manifest from the options, format it, and send it to standard out.
    print JSON.stringify manifest options
    
  package: (options) ->

    # We can get the manifest via an option or we can generate one.
    manifest = if options.manifest?
      JSON.parse readStream options.manifest
    else
      manifest options
      
    # We process the JavaScript via the `index` function and then, based on the options
    # either minify it or beautify it.
    print if options.minify
      minify code index manifest
    else
      beautify code index manifest
      
# We wrap the subcommand functions in fibers so we can use fibers within the
# implementation.
Ark.manifest = run_as_fiber Ark.manifest
Ark.package = run_as_fiber Ark.package

module.exports = Ark