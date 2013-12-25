{join,resolve} = require "path"
{include,read,type,exists,stat,remove,uniq} = require "fairmont"
glob = require "panda-glob"
{createWriteStream} = require "fs"
VFS = require "./vfs"
  
class Ark

  @middleware: ->
    (require "./middleware")(arguments...)
    
  # @minify: do ->
  #   {parser,uglify} = require "uglify-js"
  #   (code) ->
  #     ast = parser.parse code
  #     ast = uglify.ast_mangle ast
  #     ast = uglify.ast_squeeze ast
  #     uglify.gen_code ast

  # @beautify: do ->
  #   _beautify = require "./beautify"
  #   (code) -> _beautify code, indent_size: 2
    
  constructor: ({@path, @manifest, compilers, @minify, @beautify, @logger}) ->
    @logger ?= -> # logger defaults to a no-op
    @vfs = new VFS @path, @logger
    include( @vfs.compilers, compilers) if compilers?
    @beautify ?= false
    @minify ?= false
      
  package: do ->
    format = (code) ->
      if @minify then Ark.minify( code )
      else if @beautify then Ark.beautify( code )
      else code
    ->
      @vfs.addFile(file) for file in @list()
      @vfs.addAPI(api) for api in @manifest.apis
      format @vfs.toJavaScript()
            
  list: ->
    @glob()

  glob: ->
    {include, exclude} = @manifest
    results = []
    for pattern in include
      results = uniq(results.concat(glob(@path, pattern)))
    if exclude?
      for pattern in exclude
        for path in glob(@path, pattern)
          remove(results, path)
    results

module.exports = Ark
