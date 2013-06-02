{join,resolve} = require "path"
{read,type,exists,stat,remove,uniq} = require "fairmont"
CSON = require "c50n"
glob = require "panda-glob"

hoistManifest = (manifest) ->
  switch type( manifest )
    when "object" then manifest
    when "string"
      if manifest == "-"
        CSON.parse( read("/dev/stdin") )
      else
        _manifest = CSON.parse( read( resolve( manifest ) ) )
        _manifest.file ?= manifest
        _manifest
    else
      throw new TypeError("Invalid manifest")
  

globExpand = ({root,files,exclude}) ->
  results = []
  for pattern in files
    results = uniq( results.concat( glob( root, pattern ) ) )
  if exclude?
    for pattern in exclude
      for path in glob( root, pattern ) 
        remove( results, path )
  results
    
module.exports =

  package: do ->
    
    {createWriteStream} = require "fs"
    CSON = require "c50n"
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
      manifest = hoistManifest( manifest )
      {root,files,exclude, apis} = manifest
      bfs = BFS.create( root )
      include( bfs.compilers, compilers) if compilers?
      BFS.addFile( bfs, _file ) for _file in globExpand( manifest ) 
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
          action?()
          return true
      return false 

    ({manifest,file}, action) ->
      manifest = hoistManifest( manifest )
      sources = for path in globExpand( manifest )
        resolve( manifest.root, path) 
      sources.push( manifest.file ) if manifest.file?
      destination = resolve( file )
      mtime sources, destination, action
      
  list: ({manifest}) ->
    globExpand( hoistManifest( manifest ) )
