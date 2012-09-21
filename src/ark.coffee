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

source_files = (options) ->

  {source,extensions} = options

  paths = glob "#{source}/**/*.{#{extensions}}", {}
  files = []
  source_parts = source.split("/")
  for path in paths
    _path = path.split("/")[(source_parts.length)..].join("/")
    files.push _path
  files
  
manifest = (options) ->
  source: options.source
  files: 
    if options.static?
      dependencies options.source
    else 
      source_files options
  
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
    parts = path.split("/")
    directory_parts = parts[0..-2]
    file_part = parts[-1..][0]

    tmp = root
    cwd = []
    for part in directory_parts
      cwd.push << part
      # TODO: don't need all the Stat attributes
      tmp.__stat ?= stat(resolve(cwd...))
      tmp.__stat.type ?=  "directory"
      tmp = tmp[part] ?= {}
  
    compile = compilers[Path.extname path] or identity
    data = compile read resolve path
    reference = md5(data)
    
    content[reference] = base64(data)
  
    tmp[file_part] =
      __stat: stat(resolve(path))
      __ref: reference

  # add native modules
  for name in "assert util path module".split(" ")
    code = read("#{__dirname}/node/#{name}.js")
    reference = md5(code)
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