assert = require "assert"
{resolve,join} = require "path"
Ark = require "../src/ark"
{stat,exists,timer} = require "fairmont"
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
timer 1000, -> assert exists( arkFile )

console.log "Ark.mtime determines that the ark doesn't need to be rebuilt"
rebuild = false
Ark.mtime manifest: manifestFile, file: arkFile, ->
  rebuild = true
assert !rebuild
  
rebuild = false
# Wait a second to make sure the timestamp is after
timer 1000, ->
  sh "touch test/ark/foo.coffee"
  console.log "Ark.mtime determines that the ark needs to be rebuilt"
  Ark.mtime manifest: manifestFile, file: arkFile, ->
    rebuild = true

  assert rebuild
