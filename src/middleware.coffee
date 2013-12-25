{readFile, stat} = require "fs"

Ark = require "./ark"
{parse} = require "c50n"
{include} = require "fairmont"
{dirname, basename, resolve, join} = require "path"
[_,_,port] = process.argv


wantsJavaScript = (request) ->
  request.headers.accept.match(/\*\/\*|javascript/)?
  
stripExtension = (path) -> path.replace(/\.\w+$/, "")
                        
_package = (response, ark) ->
  response.setHeader "content-type", "application/javascript"
  response.write(ark.package())
  response.end()

module.exports = (root, options={}) ->
  cache = {}
  mtime = 0  
  (request, response, next) ->
    unless wantsJavaScript(request)
      next()
    else
      path = resolve(root, stripExtension(request.url[1..]))
      file = join(path, "ark.cson")
      stat file, (error, stats) ->
        if error?
          # we're assuming here that the file doesn't exist
          next()
        else
          # Check to see if the ark manifest has been updated
          # Note: Since mtime is initialized to 0, this also
          # takes care of initialized the cache, so that, in
          # else case, we know that it's cached
          _mtime = stats.mtime.getTime()
          if _mtime > mtime
            mtime = _mtime
            readFile file, encoding: "utf-8", (error, content) ->
              next() if error
              manifest = parse(content)
              include options, {path, manifest}
              ark = cache[request.url] = new Ark options
              _package(response, ark)
          else
            _package(response, cache[request.url])

      

