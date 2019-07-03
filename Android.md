---
layout: page
title: Android
permalink: /android/
toc: true
---

**Table of contents**

* Un-numbered table of contents
{:toc}

## Main App Anatomy

Inside the ```app``` folder there is a java folder - this is where our main code for the app is. 

There are also two test folders (androidTest & test), and one folder which contains the **MainActivity.kt**.

Inside the ```res``` folder we find our **resources**. Resources are static content, like images, texstrings, screen layouts, styles. Android apps separate Kotlin code, which is in the java folder, and resources which are here as much as possible. This makes make global changes that affect the whole app easier.

We usually won't need to touch the ```generatedJava``` folder, these files are generated automatically.

In the ```manifests``` folder there is the AndroidManifest.xml file. This includes essential details about our application that the operating system needs to know about to run our app. For example, all our activities are referenced here. For example, there are ```<intent-filter>``` in this file, which tell the operating system what needs to happen when a user clicks the app icon in the launcher - which activity should be launched. 

The AndroidManifest file is also where we find all the permissions that our app needs to use.

The Gradle Scripts take all our Kotlin files, any external libraries that we might be using, compile them, take our res folder and generate an installable file - the **APK**.

## Activity

An activity, like for example MainActivity.kt, is a core Android class that is responsible for drawing a user interface and receiving input events. When our app launches, it launches a specific activity - the one declared in AndroidManifest with the ```<activity> </activity>``` tag.

Activties have an associated layout file - for MainActivity this is the activity_main.xml.They define for example buttons, images, text and where these things, called ```views``` will appear on the screen. The activity and the layout are connected by a process known as **Layout inflation** which is triggered when the Activity starts.
