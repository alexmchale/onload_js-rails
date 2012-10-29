require "active_support/dependencies"

module OnloadJs

  mattr_accessor :app_root

  def self.setup
    yield self
  end

end

require "onload_js/engine"
