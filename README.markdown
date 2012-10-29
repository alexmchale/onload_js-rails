OnLoad JavaScript for Rails
===========================

This Rails 3 add-on lets you easily run a JavaScript function based on what
controller and action is being loaded.

Requirements
------------

* Rails 3 Project
* jQuery 1.8+

Examples
--------

Let's say you want to bind a function to run only on the Users controller on
the new or edit actions.

    runOnLoad("Users", ["new", "edit"], function () {
      ...
    });

On only on Users#new.

    runOnLoad("Users", "new", function () {
      ...
    });

On any controller on the index action.

    runOnLoad("*", "index", function () {
      ...
    });

On any action on the Users controller.

    runOnLoad("Users", "*", function () {
      ...
    });

On either the Users or UserSessions controllers, on the new or edit actions.

    runOnLoad(["Users", "UserSessions"], ["new", "edit"], function () {
      ...
    });
