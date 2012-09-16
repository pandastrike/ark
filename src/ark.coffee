Crypto = require "crypto"
FileSystem = require "fs"
read = FileSystem.readFileSync
Glob = require "glob"

error = (message) -> throw new Error(message)
  
# TODO: rename __meta to __stat to clarify the purpose

# TODO: add mtime, filesize, etc. to _stat?

manifest = (options,callback) ->
  {root,extensions} = options
  glob "#{root}/**/*.{extensions}", {}, (error,paths) ->
    if error
      callback(error)
    else
      callback(null,paths)

Ark =

  manifest: (options) ->
    
    error "Static analysis is not yet implemented." if options.static? 
    error "Please provide source directory via --source option" unless options.source?

    manifest options, (error,paths) ->
      throw error if error?
      console.log paths
       
  package: (options) ->
    
    _package = (error,manifest) ->
      # process manifest here ...
      
    if options.manifest
      _package null, read(options.manifest)
    else
      manifest options, _package

exports = Ark

# packager = (root,callback) ->
#   
#   glob "#{root}/**/*.{js,json}", {}, (error,paths) ->
#     if error
#       callback(error)
#       return
#     
#     filesystem = {}
#     contents = {}
# 
#     for path in paths
#       parts = path.split("/")
#       directory_parts = parts[0..-2]
#       file_part = parts[-1..][0]
# 
#       tmp = filesystem
#       for part in directory_parts
#         tmp.__meta ?= 
#           type: "directory"
# 
#         tmp = tmp[part] ?= {}
#     
#       content = fs.readFileSync(path,'utf-8')
#       reference = crypto.createHash('md5').update(content,'utf-8').digest("hex")
#       contents[reference] = content
#     
#       tmp[file_part] =
#         __meta:
#             type: "file"
#             content: reference
# 
#     
#     # TODO: should these be defined in their own namespace?
#     # ex: filesystem.native["util"] = ...
# 
#     # TODO: move the native modules into a subdirectory
#     
#     # TODO: move this whole thing out of the ruby directory -- 
#     # none of this is actually ruby
#     filesystem["util"] = fs.readFileSync("ruby/lib/util.js",'utf-8')
#     filesystem["assert"] = fs.readFileSync("ruby/lib/assert.js",'utf-8')
#     filesystem["path"] = fs.readFileSync("ruby/lib/path.js",'utf-8')
#     filesystem["module"] = fs.readFileSync("ruby/lib/module.js",'utf-8')
#     
#     callback null, 
#       root: filesystem
#       contents: contents
# 
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