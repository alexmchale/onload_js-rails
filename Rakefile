# encoding: UTF-8
require 'rubygems'
begin
  require 'bundler/setup'
rescue LoadError
  puts 'You must `gem install bundler` and `bundle install` to run rake tasks'
end

require 'rake'
require 'rdoc/task'

require 'rake/testtask'

Rake::TestTask.new(:test) do |t|
  t.libs << 'lib'
  t.libs << 'test'
  t.pattern = 'test/**/*_test.rb'
  t.verbose = false
end

task :default => :test

Rake::RDocTask.new(:rdoc) do |rdoc|
  rdoc.rdoc_dir = 'rdoc'
  rdoc.title    = 'OnloadJs'
  rdoc.options << '--line-numbers' << '--inline-source'
  rdoc.rdoc_files.include('README.rdoc')
  rdoc.rdoc_files.include('lib/**/*.rb')
end

task :default do
  sh "/usr/local/bin/coffee -c -s < coffee/onload.js.coffee > app/assets/javascripts/onload.js"
  sh "gem build onload_js-rails.gemspec"
  sh "mkdir -p pkg"
  cd "pkg"
  sh "rm -f *"
  sh "mv ../*.gem ."
end

task :push => :default do
  sh "gem push *.gem"
end
