(function() {
  var callAction, callController, makeOnLoadArray, onloadCallbacks, root;
  root = typeof exports !== "undefined" && exports !== null ? exports : this;
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
  root.railsLoaded = function(controllerName, actionName) {
    return callController(controllerName, actionName);
  };
  root.runOnLoad = function(controllers, actions, fn) {
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
}).call(this);
