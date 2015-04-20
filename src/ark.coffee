{join,resolve} = require "path"
{async, include, read, type, exists, stat,
  cat, uniq, difference, map, collect, variadic} = require "fairmont"
cat = variadic cat
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
    (include @vfs.compilers, compilers) if compilers?
    @beautify ?= false
    @minify ?= false

  package: do ->
    format = (code) ->
      if @minify then Ark.minify( code )
      else if @beautify then Ark.beautify( code )
      else code
    async ->
      (yield @vfs.addFile file) for file in @list()
      (yield @vfs.addAPI api) for api in @manifest.apis
      format @vfs.toJavaScript()

  list: -> @glob()

  glob: ->
    {include, exclude} = @manifest
    expand = map ((pattern) => glob @path, pattern)
    difference (uniq cat collect expand include),
      (uniq cat collect expand exclude)

module.exports = Ark
