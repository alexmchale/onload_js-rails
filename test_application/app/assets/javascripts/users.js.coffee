runOnLoad "Users", ["index", "new"], ->
  $("body").append("<p>(1) On the Users controller, either index or new.</p>")

runOnLoad ["OtherController", "Users"], "*", ->
  $("body").append("<p>(2) On the OtherController and Users, on any action.</p>")

runOnLoad "*", "*", ->
  $("body").append("<p>(3) On any controller, on any action.</p>")

runOnLoad "*", "index", ->
  $("body").append("<p>(4) On any controller, on the index action.</p>")

runOnLoad "Users", "index", ->
  $("body").append("<p>(5) On the Users controller, on the index action.</p>")

runOnLoad "OtherController", "*", ->
  $("body").append("<p>(1) This should not show up.</p>")

runOnLoad "*", "asdf", ->
  $("body").append("<p>(2) This should not show up.</p>")
