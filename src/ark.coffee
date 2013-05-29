{resolve} = require "path"
{read,type,exists,stat} = require "fairmont"
CSON = require "c50n"

module.exports =

  package: do ->
    
    {createWriteStream} = require "fs"
    CSON = require "c50n"
    {readStream,read,type} = require "fairmont"
    BFS = require "./bfs"        

    _minify = do ->
      {parser,uglify} = require "uglify-js"
      (code) ->
        ast = parser.parse code
        ast = uglify.ast_mangle ast
        ast = uglify.ast_squeeze ast
        uglify.gen_code ast

    beautify = do ->
      _beautify = require "./beautify"
      (code) -> _beautify code, indent_size: 2
    
    ({manifest,compilers,minify,file}) ->
      manifest ?= readStream( process.stdin )
      if type(manifest) == "string"
        manifest = CSON.parse( read( resolve( manifest ) ) )
      {root,files,apis} = manifest
      bfs = BFS.create( root )
      include( bfs.compilers, compilers) if compilers?
      BFS.addFile( bfs, _file ) for _file in files
      BFS.addAPI( bfs, api ) for api in apis
      code = BFS.toJavaScript( bfs )
      code = if minify then _minify( code ) else beautify( code )
      if file?
        stream = createWriteStream( file )
        stream.on "open", -> 
          stream.write( code )
          stream.end()
      else
        process.stdout.write( code )
   
  mtime:  do ->
        
    hoist = (value) -> if type(value) != "array" then [ value ] else value
    
    _mtime = (path) -> 
      if exists( path ) then stat( path ).mtime.getTime() else -1
    
    mtime = (sources,destination,action) -> 
      sources = hoist( sources )
      last = _mtime( destination )
      for path in sources
        if _mtime( path ) > last
          action()
          return true
      return false 

    ({manifest,file}, action) ->
      sources = [ resolve( manifest), 
        CSON.parse( read( manifest ) ).files... ]
      destination = resolve( file )
      mtime sources, destination, action
