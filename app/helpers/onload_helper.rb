module OnloadHelper

  def onload_tag
    raw <<-JAVASCRIPT
      <script type="text/javascript">
        var controllerName = #{raw controller.controller_name.camelize.to_json};
        var actionName     = #{raw controller.action_name.to_json};
        $(function () {
          railsLoaded(controllerName, actionName);
        });
      </script>
    JAVASCRIPT
  end

end
