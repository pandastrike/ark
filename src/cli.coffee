{resolve} = require "path"
{read, write} = require "fairmont"
{parse} = require "c50n"
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
    
    options =
      path: "."
      verbose: false
      
    while argv.length > 0
      switch arg = argv.shift()
        when "-p", "--path" then options.path = argv.shift()
        when "-o", "--output" then options.output  = argv.shift()
        when "-v", "--verbose" then options.logger = console.log
        else usage( "Error: invalid argument '#{arg}'" )
        
    input = resolve(options.path, "ark.cson")
    
    ark = do ->
      {path, logger} = options
      manifest = parse(read(input))
      new Ark {path, manifest, logger}

    if options.output?
      output = resolve(options.output)
      write(output, ark.package())

    else
      console.log ark.package()
  
  list: ->

    options =
      path: "."
      
    while argv.length > 0
      switch arg = argv.shift()
        when "-p", "--path" then options.path = argv.shift()
        else usage( "Error: invalid argument '#{arg}'" )
        
    input = resolve(options.path, "ark.cson")
    
    ark = do ->
      {path} = options
      manifest = parse(read(input))
      new Ark {path, manifest}
    
    console.log ark.list()
      
  ls: -> @list()
  
  help: -> usage()
  "-h": -> usage()
    
# Okay, process the command-line arguments by extracting the
# command and sending the remaining arguments
[_,_,command,argv...] = process.argv
usage("Error: no command given") unless command?
usage("Error: Invalid command '#{command}'") unless commands[command]
commands[command](argv...)
