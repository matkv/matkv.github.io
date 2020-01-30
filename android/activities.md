---
layout: default
title: Activities
parent: Android
nav_order: 2
---

# Activity

An activity, like for example MainActivity.kt, is a core Android class that is responsible for drawing a user interface and receiving input events. When our app launches, it launches a specific activity - the one declared in AndroidManifest with the ```<activity> </activity>``` tag.

Activties have an associated layout file - for MainActivity this is the activity_main.xml.They define for example buttons, images, text and where these things, called ```views``` will appear on the screen. The activity and the layout are connected by a process known as **Layout inflation** which is triggered when the Activity starts.

## Finding specific views in an xml using them in the activity

If we give one of our view objects an ```id```, an auto generated integer constant - called the same way as the id in an ```R class```. By using ```findViewByID(R.id.id_name)``` we can then use that view object in our activity.