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

read = (path) -> FileSystem.readFileSync(path,'utf-8')

readdir = (path) -> FileSystem.readdirSync(path)

stat = (path) -> FileSystem.statSync(path)

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

  paths = if options.static? 
    (dependencies source).concat glob "#{source}/**/*.json", {}
  else
    glob "#{source}/**/*.{#{extensions}}", {}
    
  files = []
  n = source.split("/").length
  for path in paths
    _path = path.split("/")[(n)..].join("/")
    files.push _path

  print files
  
  source: source
  files: files
    
index = (manifest) ->
  
  root = {}
  content = {}
  native_modules = {}
  
  resolve = (paths...) ->
    Path.resolve(manifest.source,paths...)

  # template = read("#{__dirname}/templates/module.coffee")
  # render_function = (code) ->
  #   compile(render(template, code: code))    

  compilers = 
    ".coffee": compile_coffeescript
  
  identity = (x) -> x
    
  for path in manifest.files
    directory = Path.dirname path
    filename = Path.basename path

    tmp = root
    cwd = []
    unless directory == "."
      for part in directory.split("/")
        cwd.push << part
        tmp = tmp[part] ?= {}
        # TODO: don't need all the Stat attributes
        tmp.__stat ?= stat resolve cwd...
        tmp.__stat.type ?=  "directory"
  
    real_path = resolve path
    compile = compilers[Path.extname path] or identity
    data = compile read real_path
    reference = md5(data)
    
    content[reference] = base64(data)
  
    tmp[filename] =
      __stat: stat real_path
      __ref: reference
    tmp[filename].__stat.type = "file"  

  # add native modules
  for filename in (readdir Path.resolve __dirname, "node")
    code = read Path.resolve __dirname, "node", filename
    reference = md5(code)
    name = Path.basename filename,".js"
    native_modules[name] = reference
    content[reference] = base64(code)
  
  root: root
  content: content
  native_modules: native_modules
  

code = (filesystem) ->
  
  template = read("#{__dirname}/templates/node.coffee")
  compile_coffeescript render template, filesystem

Ark =

  manifest: (options) ->
    
    error "Please provide source directory via --source option" unless options.source?

    print JSON.stringify manifest options
    
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