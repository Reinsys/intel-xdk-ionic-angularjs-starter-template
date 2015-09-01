Blank HTML App Designer Template for Building Mobile Cordova Web Apps
=====================================================================

Copyright © 2012-2015, Intel Corporation. All rights reserved.

See [LICENSE.md](<LICENSE.md>) for license terms and conditions.

Use this template as a starting point for an Intel XDK App Designer project that
will be distributed as a *mobile Cordova web app*. The file named `init-dev.js`
included as part of this project contains init code that generates an
`app.Ready` event; which is used as a way to normalize how App Designer starts
its own code. This technique allows App Designer to use a standard init sequence
regardless of the specific package type (a *packaged web app* or a *Cordova web
app*).

The `icon.png` and `screenshot.png` files are not required by your project. They
are included for use by the Intel XDK template/demo panel and have no use within
a real app. You can safely delete them from your project directory.

You can build a *Cordova web app* from this template that can be submitted to a
store using the "Cordova Hybrid Mobile App Platforms" build tiles (for
Crosswalk, Android, iOS and Windows). The `intelxdk.config.additions.xml` file
can be used to include options that control your *Cordova web app* builds. For
example, you can enable remote debug of an Android or Crosswalk Cordova app with
Chrome DevTools by adding the appropriate preferences to this file.

The Intel XDK does not include a mechanism to convert your "Standard HTML5 +
Cordova Project" into a "Standard HTML5 Project." The simplest way to convert a
Cordova project into a Standard project is to create a new "Standard" project
from the appropriate template and copy your files from this project into that
new project.

The `cordova.js` script is needed to provide your app with access to Cordova
APIs. To add Cordova APIs to your application you must add the corresponding
Cordova plugins. See the *Plugins* section on the **Projects** tab.

**IMPORTANT:** the `intelxdk.js` and `xhr.js` script files are not automatically
included in this template, as they have been in past versions. Those files are
only needed for apps built using the legacy AppMobi build containers on the
**Build** tab, which have been deprecated. We encourage you to use the Cordova
containers for all new applications. These script files can be added by hand, if
you require them, as follows:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<script src="intelxdk.js"></script>
<script src="cordova.js"></script>
<script src="xhr.js"></script>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The `xhr.js` file's purpose was to provide external domain access to your mobile
web app. In a Cordova web app this is controlled via the *Domain Access
Whitelist* in the *Build Settings* section of the **Projects** tab. For details
regarding how to specify your domain whitelist see this Cordova doc page:
<http://cordova.apache.org/docs/en/4.0.0/guide_appdev_whitelist_index.md.html#Whitelist%20Guide>
