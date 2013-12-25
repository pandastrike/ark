assert = require "assert"
Testify = require "testify"
{resolve,join} = require "path"
Ark = require "../src/ark"
{read,stat,exists,timer} = require "fairmont"
{parse} = require "c50n"
system = require "node-system"
sh = (command) ->
  console.log command
  system command

build = resolve(__dirname, "build")
path = resolve(__dirname, "ark")
manifest = parse(read(join(path, "ark.cson")))

sh "rm -rf #{build}"
sh "mkdir -p #{build}"

ark = new Ark {path, manifest}

Testify.test "Ark:", (context) ->
  context.test "ark.list", (context) ->
    context.test "returns the correct number of files", ->
      assert ark.list().length == 4
  context.test "ark.package", (context) ->
    context.test "creates the JavaScript of the expected size", ->
      assert ark.package().length == 108898

