Util = require "util"
Crypto = require "crypto"
FileSystem = require "fs"
Path = require "path"
Fibers = require "fibers"
Future = require "fibers/future"
Eco = require "eco"
CoffeeScript = require "coffee-script"

inspect = (thing) -> Util.inspect(thing)

print = console.log

error = (message) -> throw new Error(message)

warn = (message) -> process.stderr.write "#{message}\n"

read = (path) -> FileSystem.readFileSync(path,'utf-8')

readdir = (path) -> FileSystem.readdirSync(path)

stat = (path) -> FileSystem.statSync(path)

uniq = (array) ->
  hash = {}
  hash[element] = true for element in array
  Object.keys(hash)

md5 = (string) -> Crypto.createHash('md5').update(string,'utf-8').digest("hex")

base64 = (string) -> new Buffer(string).toString('base64')

render = (template,context) -> Eco.render template, context

compile_coffeescript = (source) -> CoffeeScript.compile source

make_synchronous = (fn) ->
  fn = Future.wrap fn
  ->
    fn(arguments...).wait()
  
glob = make_synchronous require "glob"

{dependencies} = require "./static"

manifest = (options) ->

  {source,extensions} = options

  source = Path.resolve source
  
  if options.static? 
    [paths,native_modules] = dependencies source
    paths = uniq paths.concat glob "#{source}/**/*.json", {}
    for module in "assert util path fs module".split(" ")
      native_modules.push module unless module in native_modules
  else
    paths = glob "#{source}/**/*.{#{extensions}}", {}
    native_modules = for filename in (readdir Path.resolve __dirname, "node")
      extension = Path.extname filename
      Path.basename filename, extension
      
  files = []
  n = source.split("/").length
  for path in paths
    _path = path.split("/")[(n)..].join("/")
    files.push _path

  source: source
  files: files
  native_modules: native_modules
    
index = (manifest) ->
  
  filesystem = 
    root: {}
    content: {}
    native_modules: {}
    module_functions: {}
  
  resolve = (paths...) ->
    Path.resolve(manifest.source,paths...)

  template = read("#{__dirname}/templates/module.coffee")
  module_function = (code) ->
    render template, code: code

  identity = (x) -> x
  compilers = 
    ".coffee": compile_coffeescript
    ".js": identity
  
    
  for path in manifest.files
    directory = Path.dirname path
    filename = Path.basename path

    tmp = filesystem.root
    cwd = []
    unless directory == "."
      for part in directory.split("/")
        cwd.push << part
        tmp = tmp[part] ?= {}
        # TODO: don't need all the Stat attributes
        tmp.__stat ?= stat resolve cwd...
        tmp.__stat.type ?=  "directory"
  
    real_path = resolve path
    extension = Path.extname path
    content = read real_path
    reference = md5(content)
    if extension in Object.keys compilers
      compile = compilers[extension]
      filesystem.content[reference] = base64(reference)
      filesystem.module_functions[reference] = module_function compile content
    else
      filesystem.content[reference] = base64(content)
  
    tmp[filename] =
      __stat: stat real_path
      __ref: reference
    tmp[filename].__stat.type = "file"  

  # add native modules
  if "http" in manifest.native_modules and not ("stream" in manifest.native_modules)
    warn "Automatically adding native module 'stream' because 'http' is being used"
    manifest.native_modules.push "stream"
  for name in manifest.native_modules
    try
      path = require.resolve Path.resolve __dirname, "node", name
      code = read path
      extension = Path.extname path
      reference = md5 code
      filesystem.native_modules[name] = reference
      filesystem.content[reference] = base64 reference
      compile = compilers[extension]
      filesystem.module_functions[reference] = module_function compile code
    catch e
      warn "Unable to package native module '#{name}'"
  
  filesystem
  
code = (filesystem) ->
  
  template = read("#{__dirname}/templates/node.js")
  render template, filesystem

Ark =

  manifest: (options) ->
    
    error "Please provide source directory via --source option" unless options.source?

    print inspect manifest options
    
  package: (options) ->

    manifest = if options.manifest
      JSON.parse read options.manifest
    else
      manifest options
      
    print code index manifest

run_as_fiber = (fn) ->
  ->
    _arguments = arguments
    Fiber( -> fn(_arguments...) ).run()
  
Ark.manifest = run_as_fiber Ark.manifest
Ark.package = run_as_fiber Ark.package

module.exports = Ark