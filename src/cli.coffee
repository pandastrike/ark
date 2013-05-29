{resolve} = require "path"
{read} = require "fairmont"
Ark = require "./ark"

# Print usage with an optional error message 
usage = (message) -> 
  process.stderr.write( "#{message}\n" ) if message?
  process.stderr.write( read( resolve( __dirname, "..", "doc", "USAGE" ) ) )
  process.exit( -1 )


# The commands object - each ark command is a function taking the 
# arguments given after the command
commands = 
  
  #
  # The 'package command
  #
  package: (argv...) ->
    
    options = {}
    
    while argv.length > 0
      switch arg = argv.shift()
        when "-m", "--manifest" then options.manifest = argv.shift()
        when "-t", "--mtime" then options.mtime = true
        when "-f", "--file" then options.file = argv.shift()
        when "-z", "--minify" then options.minify = true
        else usage( "Error: invalid argument '#{arg}'" )
        
    if options.mtime
      unless options.file? && options.manifest?
        usage("You must specify a file to test against") 
      Ark.mtime options, -> Ark.package( options )
    else
      Ark.package( options )    
      
  help: -> usage()
  "-h": -> usage()
    
# Okay, process the command-line arguments by extracting the
# command and sending the remaining arguments
[_,_,command,argv...] = process.argv
usage("Error: no command given") unless command?
usage("Error: Invalid command '#{command}'") unless commands[command]
commands[command](argv...)

# TODO: add a command called check(?) to see a given file is out-of-date
# relative to the manifest. Should be something that can be called from 
# code as well, like Ark.package ... ex: Ark.check. Or ... Ark.each ?
