(function() {
  var callAction, callController, makeOnLoadArray, onloadCallbacks;
  onloadCallbacks = {};
  makeOnLoadArray = function(items) {
    if (jQuery.isArray(items)) {
      return items;
    }
    if (jQuery.type(items) === "string") {
      return [items];
    }
    return ["*"];
  };
  callAction = function(controllerName, actionName) {
    var actionList, controllerList, fn, _i, _len, _results;
    controllerList = onloadCallbacks[controllerName];
    if (controllerList) {
      actionList = controllerList[actionName];
    }
    if (actionList) {
      _results = [];
      for (_i = 0, _len = actionList.length; _i < _len; _i++) {
        fn = actionList[_i];
        _results.push(fn());
      }
      return _results;
    }
  };
  callController = function(controllerName, actionName) {
    callAction(controllerName, actionName);
    callAction("*", actionName);
    callAction(controllerName, "*");
    return callAction("*", "*");
  };
  window.runOnLoad = function(controllers, actions, fn) {
    var a, c, _i, _len, _results;
    if (jQuery.isFunction(actions) && !jQuery.isFunction(fn)) {
      fn = actions;
      actions = null;
    }
    controllers = makeOnLoadArray(controllers);
    actions = makeOnLoadArray(actions);
    _results = [];
    for (_i = 0, _len = controllers.length; _i < _len; _i++) {
      c = controllers[_i];
      _results.push((function() {
        var _base, _j, _len2, _ref, _ref2, _results2;
        _results2 = [];
        for (_j = 0, _len2 = actions.length; _j < _len2; _j++) {
          a = actions[_j];
          if ((_ref = onloadCallbacks[c]) == null) {
            onloadCallbacks[c] = {};
          }
          if ((_ref2 = (_base = onloadCallbacks[c])[a]) == null) {
            _base[a] = [];
          }
          _results2.push(onloadCallbacks[c][a].push(fn));
        }
        return _results2;
      })());
    }
    return _results;
  };
  jQuery(function() {
    var action, controller, dataElement, _ref, _ref2;
    dataElement = $("#onload-js-data");
    controller = (_ref = dataElement.data("controller")) != null ? _ref : "";
    action = (_ref2 = dataElement.data("action")) != null ? _ref2 : "";
    if (controller !== "" && action !== "") {
      return callController(controller, action);
    }
  });
}).call(this);
