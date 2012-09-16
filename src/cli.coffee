FileSystem = require "fs"
Optimist = require "optimist"
Ark = require "./ark"

read = (path) -> FileSystem.readFileSync(path,'utf-8')
usage = read("#{__dirname}/../USAGE")

error = (message) ->
  console.log """
    ERROR: #{message}
    
    USAGE
      
    #{usage}
    """
    
  process.exit(-1)

command = process.argv[2]

error "No command given." unless command?
error "Unrecognized command '#{command}'." unless Ark[command]?

argv = Optimist.parse(process.argv[3..])
error "Invalid option(s) '#{argv._.join(", ")}'" unless argv._.length == 0
valid = "s source z static u uglify x extensions".split(" ")
for key,value of argv
  error "Invalid option '#{key}'." unless key in valid or key = "_"
    
options = 
  source: argv.s or argv.source
  static: argv.z or argv.static
  uglify: argv.u or argv.uglify
  extensions: argv.x or argv.extensions

# if a source directory is specified, use that; otherwise assume we'll read
# the manifest from stdin
options.manifest = process.stdin unless options.source?

options.extensions ?= "js,json,coffee"

try 
  Ark[command](options)
catch e
  error(e.message)
