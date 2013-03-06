# Process command line arguments and invoke subcommands.

# ## Native Modules

FileSystem = require "fs"

# Convenience methods for readability ...
read = (path) -> FileSystem.readFileSync(path,'utf-8')

readStream = (stream) -> 
  buffer = ""
  fiber = Fiber.current
  stream.resume()
  stream.on "data", (data) -> buffer += data
  stream.on "end", -> fiber.run()
  Fiber.yield()
  buffer

print = console.log

# Module constant for printing the usage.
usage = read("#{__dirname}/../doc/USAGE")

# ## Package Modules

# Optimist gives us a simple interface for handling CLI arguments.
Optimist = require "optimist"

# ## Local Modules

# The subcommands are actually implemented in the [ark][] source file.
# [ark]:./ark.html
Ark = require "./ark"


# If we run into any trouble, we display an error message and then display
# the usage string. Perhaps this would be better going to standard error.
error = (message) ->
  console.log """
    ERROR: #{message}
    
    #{usage}
    """
    
  process.exit(-1)

# We assume we're being invoked from the command-line via the `coffee`
# command. This might not be a reasonable assumption, in which case, we should
# probably export a function and allow the arguments to be passed in.
command = process.argv[2]

# Check to make sure we were given a valid subcommand.
error "No command given." unless command?
error "Unrecognized command '#{command}'." unless Ark[command]?

# Let optimist convert the command-line arguments into a hash for us, starting
# with the option after the subcommand.
argv = Optimist.parse(process.argv[3..])

# There shouldn't be any other standalone arguments besides the subcommand.
error "Invalid option(s) '#{argv._.join(", ")}'" unless argv._.length == 0

# Check to make sure all the options given are valid.
valid = "s source z static u uglify x extensions".split(" ")
for key,value of argv
  error "Invalid option '#{key}'." unless key in valid or key = "_"

# **Note** We don't provide options for input or output when you could simply
# use the shell redirection operators. We need `--source` (or `-s`) because
# you can't redirect a directory in a straightforward an intuitive way. But we
# don't provide, say, an option to specify the manifest as either input or
# output, since you can just do something like this:
#
#     ark package < ./manifest.json

# Create an options hash by normalizing the options given on the command-line.
options = 
  source: argv.s or argv.source
  static: argv.z or argv.static
  minify: argv.m or argv.minify
  extensions: argv.x or argv.extensions

# Ff a source directory is specified, use that; otherwise assume we'll read
# the manifest from stdin.
options.manifest = (JSON.parse readStream process.stdin) unless options.source?

# By default, we handle JavaScript, JSON, and CoffeeScript files. Presently,
# this only affects the `manifest` subcommand when you're not using the
# `--static` option.
options.extensions ?= "js,json,coffee"

# Run the subcommand using the options given.
try 
  print Ark[command](options)
catch e
  error(e.message)
