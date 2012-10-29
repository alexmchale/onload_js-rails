OnLoad JavaScript for Rails
===========================

This Rails 3 add-on lets you easily run a JavaScript function based on what
controller and action is being loaded.

Requirements
------------

* Rails 3 Project
* jQuery 1.8+

Installation
------------

Add the following to your Gemfile and run *bundle*.

    gem 'onload_js-rails'

Use the *onload_tag* helper at the bottom of your body, below your *javascript_include_tag*.

    <%= onload_tag %>

In your application.js headers, add the onload js below jquery.

    //= require onload

Finally, use the *runOnLoad* method in your JavaScript or Coffee-Script as described below.

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

Maintainer
----------

* [Alex McHale](http://github.com/alexmchale)

Contributing
------------

* If you'd like to contribute to this project, please fork it on GitHub and
  send me a pull request.

License
-------

Copyright 2012 Alex McHale (alex@anticlever.com)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
