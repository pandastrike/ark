Util = require "util"
Crypto = require "crypto"
FileSystem = require "fs"
Path = require "path"
Eco = require "eco"
CoffeeScript = require "coffee-script"

inspect = (thing) -> Util.inspect(thing)

error = (message) -> throw new Error(message)

read = (path) -> FileSystem.readFileSync(path,'utf-8')

stat = (path) -> FileSystem.statSync(path)

md5 = (string) -> Crypto.createHash('md5').update(string,'utf-8').digest("hex")

base64 = (string) -> new Buffer(string).toString('base64')

render = (template,context) -> Eco.render template, context

compile = (source) -> CoffeeScript.compile source

glob = require "glob"

manifest = (options,callback) ->
  
  {source,extensions} = options
  
  glob "#{source}/**/*.{#{extensions}}", {}, (error,paths) ->
    if error
      callback(error)
    else
      manifest = source: source, files: []
      source_parts = source.split("/")
      for path in paths
        _path = path.split("/")[(source_parts.length)..].join("/")
        manifest.files.push _path
      callback(null,manifest)

build_index = (manifest) ->
  
  root = {}
  content = {}
  native_modules = {}
  
  resolve = (paths...) ->
    Path.resolve(manifest.source,paths...)

  template = read("#{__dirname}/templates/module.coffee")
  render_function = (code) ->
    compile(render(template, code: code))    
    
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
  
    data = read(resolve(path))
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
  

generate_code = (filesystem) ->
  
  template = read("#{__dirname}/templates/node.coffee")
  console.log compile render template, filesystem

Ark =

  manifest: (options) ->
    
    error "Static analysis is not yet implemented." if options.static? 
    error "Please provide source directory via --source option" unless options.source?

    manifest options, (error,manifest) ->
      throw error if error?
      console.log JSON.stringify(manifest)
       
  package: (options) ->
    
    _package = (_error,manifest) ->
      
      error(_error) if _error?
      generate_code(build_index(manifest))

    if options.manifest
      _package null, JSON.parse(read(options.manifest))
    else
      manifest options, _package

module.exports = Ark