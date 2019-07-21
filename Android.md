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

## Finding a view

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

### build.gradle

The build.gradle file for the project is right inside the root folder of the project. The other build.gradle file is inside the app folder.

Inside the build.gradle file in the project foder:

* The repositories for the entire project are defined. A repository is a remote server where external code is downloaded from. For example Android libraries.
* Dependencies - external code, such as libraries that a project depends on

The build.gradle file in the app folder is responsible for setting up the app module. Inside it:

* Plugins & SDK versions are specified.
  * compileSdkVersion -> the version that our app actually compiles in
  * minSdkVersion -> the minimum version that it supports
  * targetSdkVersion -> we basically promise that we have tested our app from the minimum version up to this version
* The application ID is specified - the unique identifier of our app. It is not possible to have to apps with the same id on the same device or on google play.
* Dependencies -  all the dependencies that are needed for our app. Gradle will download these dependencies for the repositories that we specified in the *project* build.gradle file.

## Android Compatibility

Minimum API Level - Android has version numbers that map to the API levels. If our minSdkVersion is, for example, 19 - the minimum API version that a phone that wants to run it needs to have is 19. 18 and lower won't be able to install the app.

In some cases, it might not even make sense to support devices that are below a certain API level. Support libraries like Android Jetpack help us with compatibility issues. For example - our class ```MainActivity : AppCompatActivity()``` extends extends from AppCompatActivity() - this is a compatibility class that makes sure that our activity includes a menu bar known as the action bar that looks the same across different platform OS levels.

AppCompatActivity is part of ```androidx``` - the namespace of Android Jetpack.

# Layout

Every view has a left and a top coordinate, a width and a height. The unit for expressing location and dimensions is the Density Independent Pixel (dp). Android devices automatically handle the conversion from dp to pixel values.

Views are organizes in a hierachy of views. Views whose primary job it is to contain other views are called ```ViewGroups```. Commonly, a layout has a top viewgroup and a number of viewgroups inside it. For example, the LinearLayout is a viewgroup that allows us to arrange views horizontally or vertically by setting its orientation. The deeper the view hierarchy is, the more work the Android system has to do to calculate layouts. Having deep view hierarchies can slow down our app.

To help with this, Android offers a layout that promotes a flat view hierarchy - ConstraintLayout. It is best for arranging a small number of views or viewgroups in a complex layout that might otherwise require deep nesting.

## Resources

When setting the text for a textView, we shouldn't use the actual string, but a string resource. With the resources editor (button next to where we would set the text normally) we can add a new resource. A string resource is then found in strings.xml. 

Something similar can be done for example for the text size, the created resource will be stored in dimens.xml.

## Styling

Padding -> space added inside the view

Margin -> space added outside the view

To create certain formatting for multiple views, we can create a style. One way to do this: right click the view in the component tree in the designer, click refactor, "Extract Style".

## Scrollable view

A basic scrollable view is ScrollView, which can take one other view as a child. This is commonly a LinearLayout.

## EditText

The editText view let's a user input some text. By setting the inputType, we can decide what type of text should be entered and the keyboard will show version that fits it, for example e-mail or entering a date or a number. If we choose password as the type it will show the password characters instead of the actual value.

If we make the text value empty, the value that is set in the "hint" property will be shown instead.

## Visibility settings for views

* visible shows the view
* invisible hides it, but the view still takes up space
* gone hides it and removes the space it would take up

## Data Binding

Instead of using ```findViewById```, we can use Data Binding to find our views. Using Data Binding leads to significant performance improvements. To enable data binding, we need to add this code to the build.gradle file in the app module in the android section:

```kotlin
dataBinding {
        enabled = true  
    }
```

Furthermore, we need to wrap our whole main_activity.xml in a <layout></layout> tag and add the namespace declarations to the layout tag instead:

```kotlin
<layout xmlns:android="http://schemas.android.com/apk/res/android"
        xmlns:tools="http://schemas.android.com/tools"
        xmlns:app="http://schemas.android.com/apk/res-auto">
```

In the main activity we create a binding using. The binding is like a glue beetween the layout and the actual activity.

```kotlin
private lateinit var binding : ActivityMainBinding
```

And in onCreate:

```kotlin
binding = DataBindingUtil.setContentView(this, R.layout.activity_main)
```

Now we don't need to use ```findViewById``` anymore, we can find a certain view like this:

```kotlin
binding.doneButton.setOnClickListener{ 
...
}
```

Another example. Here we need to Invalidate all binding expressions so that they get recreated with the correct data.

```kotlin
 binding.apply {
  nicknameText.text = binding.editText.text
  invalidateAll() //needed to refresh the UI with the new data
  editText.visibility = View.GONE
  view.visibility = View.GONE
  nicknameText.visibility = View.VISIBLE
        }
```

### Binding a view to a data class

We have a data class: 

```kotlin
data class MyName(var name : String = "", var nickname : String = "")
```

In our xml, right after the layout tag, we set a data tag with a new variable with a name and a type. The name of the variable doesn't have to be the same as the class name of the type, but it is usually done like this:

```kotlin
<data>
    <variable
            name="myName"
            type="com.example.aboutme.MyName"/>
</data>
```

Setting the actual text using data from this variable: ```android:text="@={myName.name}"```. Then in onCreate we set it like this: ```binding.myName = myName```

Another example: Here the nickname_text textview has a binding for myName.nickname as its text. In the MainActivity we set it like this:

```kotlin
myName?.nickname = nickname_edit.text.toString()
```
This means we don't need to actually touch the textview itself, we set the value of our binding variable, and this is the one that is accessed in the view.

## ConstraintLayout

Constraint -> a connection or alignment to another UI element, to the parent layout, or to an invisible guideline.

Advantages of using ConstraintLayout:

* Responsive to screens and resolution
* Usually results in a flatter view hierarchy
* Optimized for laying out its views
* Free form - we can place views anywhere, and the editor helps add constraints

There are three types of constraints:

* Fixed constraints: represented by a straight line in the design view. We specify a specific dimension. A common use for fixed constraints is margin.
* Wrap content: represented by a line of '>' in the designer. The view expands only as much as needed to fit its contents.
* Match constraints: represented by a zig-zag line. The more constraints are of this kind, the more the layout can adapt to different screen sizes and orientations.

Right clicking a view in the designer gives us additional option, for example to center the view again.

If we don't specify the position for a view, it always appears at (0,0) in the parent. With absolute positioning, we specify the actual coordinates of the view. In relative positioning, we specify where the view goes in relation to the parent and other views. 

Views can relate to each to each other using fixed constraints such as margins. A more powerful way to position views is using **relative constraints** where we specify a relationship between views.

Adding bias gives a preference or more weight to a constraint - like adding a stronger spring that pulls on the view from one side.

* Fixed constraint -> A constraint that is specified using a hardcoded number.
* Adaptable constraint -> A constraint that defines a relationship in relative and weighted terms.
* Aboslute positioning -> Positioning is numerical, such as the position in x,y coordinates.
* Relative positioning -> Views are positioned by specifying a relationship to other views.

### Ratios

We can define one dimension of a widget as a ratio of another dimension of it. For example we can make a square by requiring a 1:1 ratio. For example, setting ```android:layout_height="0dp"``` of a view and setting ```app:layoutConstraintDimensionRatio="2:1"``` so this view will be twice as wide as its height.

Clicking the small grey triangle in the top left corner of the constraints in the designer should open a small ratio editor.

### Chaining

Chains link together views in a horizontal or vertical row and then they behave as a group. Chains are controlled by attributes set at the head of the chain. The head is the element from which the chain was created.

The default behaviour of a chain is to spread the elements equally in the available space. This is called a **Spread Chain**.

A **Spread Inside Chain** will use all available space, but the head and the tail are glued to the parent.

A **Weighted Chain** will use up all space and resize the elements based on values set in the ```layoutConstraintHorizontalWeight``` or ```layoutConstraintVerticalWeight``` attributes.

A **Packed Chain** will do the opposite and use the minimum space. We can use bias to move the elements in a certain direction using the **Packed Chain with Bias** 

### Baseline Constraint

We can right click the textview and click show baseline and then connect the baseline of one textview to the baseline of another. From each handle, we can only create one baseline constraint. So with, for example, 3 buttons, we can connect the first button's constraint to the middle button, and the third button's constraint to the middle button.

This allows us to align several views by making them align themselves to a specific view's baseline (bottom edge).
