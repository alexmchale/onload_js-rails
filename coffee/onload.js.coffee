root = exports ? this

onloadCallbacks = {}

makeOnLoadArray = (items) ->
  return items if jQuery.isArray(items)
  return [items] if jQuery.type(items) == "string"
  return ["*"]

callAction = (controllerName, actionName) ->
  controllerList = onloadCallbacks[controllerName]
  actionList = controllerList[actionName] if controllerList
  (fn() for fn in actionList) if actionList

callController = (controllerName, actionName) ->
  callAction controllerName, actionName
  callAction "*", actionName
  callAction controllerName, "*"
  callAction "*", "*"

root.railsLoaded = (controllerName, actionName) ->
  callController controllerName, actionName

root.runOnLoad = (controllers, actions, fn) ->
  if jQuery.isFunction(actions) && !jQuery.isFunction(fn)
    fn = actions
    actions = null
  controllers = makeOnLoadArray(controllers)
  actions = makeOnLoadArray(actions)
  for c in controllers
    for a in actions
      onloadCallbacks[c] ?= {}
      onloadCallbacks[c][a] ?= []
      onloadCallbacks[c][a].push fn
