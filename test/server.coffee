{join} = require "path"
connect = require "connect"
app = connect()

ark = require("..").middleware

app.use connect.static(join(__dirname, "/public"))
app.use ark("test")
app.use (_, response) ->
  response.statusCode = 404
  response.end()

app.listen(1337)
