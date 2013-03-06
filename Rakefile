require "starter/tasks/npm"
require "starter/tasks/git"

task :docs do
  sh "docco src/*.coffee"
end

task :build do
  `coffee -c -o lib src`
end