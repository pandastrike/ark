assert = require "assert"
Amen = require "amen"
{resolve,join} = require "path"
Ark = require "../src/ark"
{call, read, stat, exists, timer, shell} = require "fairmont"
yaml = require "js-yaml"

call ->

  build = resolve __dirname, "build"
  path = resolve __dirname, "ark"
  manifest = yaml.safeLoad yield read (join path, "ark.yml")


  shell "rm -rf #{build}"
  shell "mkdir -p #{build}"

  ark = new Ark {path, manifest}

  Amen.describe "Ark:", (context) ->

    context.test "ark.list returns the correct number of files", ->
      assert ark.list().length == 4

    context.test "ark.package creates the JavaScript of the expected size", ->
      assert (yield ark.package()).length == 109189
