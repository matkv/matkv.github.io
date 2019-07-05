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

### Finding specific views in an xml using them in the activity

If we give one of our view objects an ```id```, an auto generated integer constant - called the same way as the id in an ```R class```. By using ```findViewByID(R.id.id_name)``` we can then use that view object in our activity.

### OnClickListener

To make our activity "listen" for a button press, we use ```OnClickListener```.

```kotlin
rollButton.setOnClickListener {
            Toast.makeText(this, "Button has been pressed", Toast.LENGTH_SHORT).show()
        }
```

## Resources

All of our image resources should be in the ```drawable``` folder in our resources folder. We can access them in our code by using, for example, ```R.drawable.dice_1```

## Finding views efficiently

Generally, we want to minimize the amount of times we use ```findViewById``` because it searches the whole view hierarchy. This could cause our app to lag on slower devices. It it good practice to make a field for views that we use often. In Android, we generally don't write code in activity constructors. The views are actually not in memory until they've been inflated by setContentView.

A common pattern in Android to initialise non-null variables in ```onCreate``` we can use ```lateinit```. This promises the compiler that the variable will be initialised before calling any methods on it.

```kotlin
lateinit var diceImage: ImageView
```

## Tools namespace

The "tools" namespace is used when we want to define dummy content which can be used when designing our app. For example, we might want to show an emputy screen when our app has started, but while designing we want to be able to use dummy data so we can see how it would look once some data has been loaded.

Attributes using the "tools" namespace are only shown when previewing the screen in design view, they're removed once we actually compile the app.

## Introduction to Gradle

Gradle is the build tool for Android. It is responsible for:

* Decides what devices can actually run our app
* It compiles our code to an executable
* It manages dependent code and libraries
* Signing apps so users can actually download the app from Google Play
* Running automated tests

A project contains two gradle files:

* A single gradle file for project wide build settings
* A specific gradle file for each module of our project (Module -> folder with source files and resources for a certain piece of functionality in our app)

The default module is called ```app```.
