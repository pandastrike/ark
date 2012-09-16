Crypto = require "crypto"
FileSystem = require "fs"
Path = require "path"
Eco = require "eco"
CoffeeScript = require "coffee-script"

error = (message) -> throw new Error(message)

read = (path) -> FileSystem.readFileSync(path,'utf-8')

stat = (path) -> FileSystem.statSync(path)

md5 = (string) -> Crypto.createHash('md5').update(string,'utf-8').digest("hex")

render = (template,content) -> Eco.render template, content

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
  
  filesystem = {}
  content = {}
  
  resolve = (paths...) ->
    Path.resolve(manifest.source,paths...)

  for path in manifest.files
    parts = path.split("/")
    directory_parts = parts[0..-2]
    file_part = parts[-1..][0]

    tmp = filesystem
    cwd = []
    for part in directory_parts
      cwd.push << part
      # TODO: don't need all the Stat attributes
      tmp.__stat ?= stat(resolve(cwd...))
      tmp.__stat.type ?=  "directory"
      tmp = tmp[part] ?= {}
  
    data = read(resolve(path))
    reference = md5(data)
    content[reference] = data
  
    tmp[file_part] =
      __stat: stat(resolve(path))
      __ref: reference

  # add native modules
  filesystem.__native = {}
  for name in "assert util path module".split(" ")
    filesystem.__native[name] = read("#{__dirname}/node/#{name}.js")
  
  { root: filesystem, content: content }
  

generate_code = (filesystem) ->
  
  template = read("#{__dirname}/templates/node.coffee")
  console.log CoffeeScript.compile render template, filesystem: filesystem

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


# # TODO: I'd love to come up with an elegant way to avoid defining 
# # anything at global scope here ...
# 
# packager "cs/lib/web", (error,filesystem) ->
#   base64d = new Buffer(JSON.stringify(filesystem)).toString('base64')
#   uri = "data:application/json;base64,#{base64d}"
#   console.log """
#   var FileSystem;
#   (function() {
#     function b64_to_utf8( str ) {
#         return decodeURIComponent(escape(window.atob( str )));
#     };
#     FileSystem = JSON.parse(b64_to_utf8("#{base64d}"));
#   })();
#   """

# Not quite sure how to avoid having certain globals


