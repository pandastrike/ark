require "starter/tasks/npm"
require "starter/tasks/git"

desc "Generate docs based on the source code"
task :docs do
  sh "docco src/*.coffee"
end

desc "Run the developer setup"
task :setup do
  sh "gem install starter docco"
end
