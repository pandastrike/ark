http = require "http"
Ark = require "./ark"

[_,_,port] = process.argv

server = http.createServer (request, response) ->
  ark = new Ark path: "./test/ark", logger: console.log
  start = Date.now()
  response.write(ark.package())
  end = Date.now()
  console.log "Handled request in #{end-start} ms."
  response.end()
  
  
server.listen(port)
