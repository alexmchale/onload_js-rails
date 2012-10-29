require File.expand_path("../lib/onload_js/version", __FILE__)

Gem::Specification.new do |s|
  s.name                      = "onload_js-rails"
  s.version                   = OnloadJs::VERSION
  s.platform                  = Gem::Platform::RUBY
  s.authors                   = [ "Alex McHale" ]
  s.email                     = [ "alex@anticlever.com" ]
  s.homepage                  = "http://github.com/alexmchale/onload_js-rails"
  s.description               = "Lets you easily run JavaScript based on the current controller#action."

  s.rubyforge_project         = "onload_js-rails"
  s.required_rubygems_version = "> 1.3.6"

  s.files = `git ls-files`.split("\n")
  s.executables = `git ls-files`.split("\n").map{|f| f =~ /^bin\/(.*)/ ? $1 : nil}.compact
  s.require_path = 'lib'
end
