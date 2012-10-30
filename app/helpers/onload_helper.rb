module OnloadHelper

  def onload_tag
    data = { controller: controller.controller_name.camelize, action: controller.action_name }
    content_tag :div, id: "onload-js-data", style: "display: none", data: data do
      ""
    end
  end

end
