module TeamPage

  class Engine < Rails::Engine

    initialize "onload_js-rails.load_app_instance_data" do |app|
      TeamPage.setup do |config|
        config.app_root = app.root
      end
    end

    initialize "onload_js-rails.load_static_assets" do |app|
      app.middleware.use ::ActionDispatch::Static, "#{root}/public"
    end

  end

end
