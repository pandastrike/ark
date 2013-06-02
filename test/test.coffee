assert = require "assert"
{resolve,join} = require "path"
Ark = require "../src/ark"
{stat,exists} = require "fairmont"
system = require "node-system"
sh = (command) ->
  console.log command
  system command

buildPath = resolve( __dirname, "build" )
arkPath = resolve( __dirname, "ark" )
manifestFile = join( arkPath, "ark.cson" )
arkFile = join( buildPath, "ark.js" )
sh "rm -rf #{buildPath}"
sh "mkdir -p #{buildPath}"

console.log "Ark.list returns the correct number of files"
assert Ark.list( manifest: manifestFile ).length == 4

console.log "Ark.package creates the ark.js file"
Ark.package( manifest: manifestFile, file: arkFile )
# Give it a second to exist
setTimeout -> assert exists( arkFile ), 1000