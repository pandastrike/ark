{join} = require "path"
express = require "express"
app = express()

ark = require("..").middleware

app.use express.compress()
app.use express.static(join(__dirname, "/public"))
app.use ark("test")
app.use (_, response) ->
  response.statusCode = 404
  response.end()

app.listen(9006)
