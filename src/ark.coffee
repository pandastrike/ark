{join,resolve} = require "path"
{include,read,type,exists,stat,remove,uniq} = require "fairmont"
CSON = require "c50n"
glob = require "panda-glob"
{createWriteStream} = require "fs"
VFS = require "./vfs"

class Ark

  @glob: ({path, include, exclude}) ->
    results = []
    for pattern in include
      results = uniq(results.concat(glob(path, pattern)))
    if exclude?
      for pattern in exclude
        for _path in glob(path, pattern)
          remove(results, _path)
    results


  @minify: do ->
    {parser,uglify} = require "uglify-js"
    (code) ->
      ast = parser.parse code
      ast = uglify.ast_mangle ast
      ast = uglify.ast_squeeze ast
      uglify.gen_code ast

  @beautify: do ->
    _beautify = require "./beautify"
    (code) -> _beautify code, indent_size: 2
    
  constructor: ({@path, compilers, @minify, @logger}) ->
    @logger ?= -> # logger defaults to a no-op
    @vfs = new VFS @path, @logger
    include( @vfs.compilers, compilers) if compilers?
    @manifest = CSON.parse(read(resolve(@path, "ark.cson")))
    @manifest.path = @path
      
  package: do ->
    format = (code) ->
      if @minify then Ark.minify( code ) else Ark.beautify( code )
    ->    
      @vfs.addFile(file) for file in @list()
      @vfs.addAPI(api) for api in @manifest.apis
      format @vfs.toJavaScript()
   
  list: ->
    Ark.glob @manifest

module.exports = Ark
