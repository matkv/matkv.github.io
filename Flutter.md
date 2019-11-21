---
layout: page
title: Flutter
permalink: /flutter/
---

**Table of contents**

* Un-numbered table of contents
{:toc}

# Links

* [Flutter Get Started](https://flutter.dev/docs/get-started/)
* [Udacity Course](https://classroom.udacity.com/courses/ud905)
* [Write your first Flutter app](https://flutter.dev/docs/get-started/codelab)
* [Write your first Flutter app part 2](https://codelabs.developers.google.com/codelabs/first-flutter-app-pt2/#0)
* [First Flutter App Example](https://matkv.github.io/flutterfirstapp.html)
* [Flutter For Web Developers](https://flutter.dev/docs/get-started/flutter-for/web-devs)

# Flutter

Flutter is an SDK for creating mobile 2D apps + Programming Framework built on Dart.

Advantages of using Flutter:

* High-velocity development and multiplatform reach
* One codebase compiles to native arm code
* Own renderer 🠒 fast consistent UI across platforms and devices
* No bridging between framework and the widgets 🠒 efficient rendering and smoother animations.

Flutter is written in Dart. Dart should feel familiar if we have experience with languages like Swift, Java, C# or JavaScript.

Dart is performant in development and in production. It supports both just-in-time and ahead-of-time compilation.

JIT compilation enables us to recompile code directly on the device, allowing a **hot reload**.

Flutter apps can be customised for different platforms (iOS / Android) and the Flutter framework gives us tools to build and publish our dart code to native apps.

Flutter

* Flutter Framework - A Dart framework, providing Utility functions & UI Elements (Widgets)
* Dart - the programming language
* Flutter SDK - A set of tools

**Debug, profile or release runs**

Flutter apps can be run in several different "modes".

Debug mode trades performance for useful developer features such as hot reload and step debugging. Once we are ready to analyze performance or release our app, we'll want to use Flutter’s “profile” or “release” build modes. 

**Arrow notation**

Arrow notation is used for one-line functions or methods.
```dart
void main() => runApp(MyApp());
```

**Naming convention**

Private classes should start with an underscore "_".

## Flutter Architecture

A Flutter app is just a **tree of widgets**.

It runs from one codebase on both platforms, but when needed we can run different parts of code for each platform.

In Flutter, a view is built as an immutable tree of widgets. Widgets are the foundation of Flutter apps. A widget is a description of part of a user interface. **Nearly everything in Flutter is a widget.**

There are root widgets that have child wigets.

There are no separate files for layout,customization or text alignment. It is all defined in the Flutter widget.

When a widget state changes, the widget rebuilds itself according to the new state.

The UI can be described as functions of state.

### Flutter/Dart to a Native App

The Flutter SDK has tools that compile the Dart code to native Android/iOS code.

## Development with Flutter & development tools

### Folder structure

* The "android" and "ios" folders that are created when creating a new Flutter project hold the respective native code.

* The "lib" folder is where we write our entire Flutter app. 

* The "test" folder allows us to write automated tests.

* The "pubspec.yaml" file configures our overall project and our dependencies. There we can add third party packages or add static assets.

### Hot reload

The hot reload feature allows us to make changes in our app without having to rebuild & restart it.

### Flutter inspector

In Android Studio, under View 🠒 Windows 🠒 Flutter inspector we can enable the Flutter inspector (while our app is running).

This enables us to see the composition of existing widgets. By pressing the inspect button we can choose a specific widget to inspect (with the mouse or with our touchscreen on the actual device).

### Dart Code Formatter

Under Code-> Reformat Code with Dart format, we can let Android Studio format our code according to Dart Style Guides.

# Flutter Apps

The entry point to a Flutter app is its ```main``` function. It is in the ```main.dart``` file (we shouldn't rename this file). This function is the first function that is called when the Flutter app is run by the operating system.

```dart
void main() {

}
```
To make this function do anything, we need to attach a **widget** to the screen.

## Widgets

Widgets are user interface components - what the user sees on the screen. A Flutter app typically consists of multiple widgets. The entire app is wrapped in one root widget. Widgets often contain other widgets - child widgets.

They are not just about the user interface, they also contain logic.

We can think of our Flutter app as a tree of widgets. We have one **root** widget for our app, and then we might have widgets for the different pages between we can navigate around and nested sub-widgets.

### Classes

Dart is an object oriented programming language. Classes allow us to create blueprints of new objects.  

We want to create a widget. A widget will be an object, so we want to define a class to specify what the object should look like. To be able to use our class as a widget, it needs to inherit from the base class.

We want to inherit from a class that is exposed through the Flutter SDK & Framework. In order to do that, we need to **import** from a package that Flutter provides for us.

```dart
import 'package:flutter/material.dart'; 
```

Now we can use features from that package in our app. We inherit from ```StatelessWidget``` in order to be able to use functionality that a widget would have.

```dart
class MyApp extends StatelessWidget {
  build(context){
    return MaterialApp();
  }
}
```
The ```build()``` method makes sure that our class will be drawable as a widget. Flutter will always call this method when the widget is inserted into the tree.

It takes one **argument** - ```context```. This will, for example, provide information about the theme of our application.

The ```build()``` method needs to return something to be drawn on the screen.
We return a ```MaterialApp``` widget. This is the **core root widget** which we use in every Flutter app we create.

Using ```return MaterialApp();``` we call the constructor method of the class. We create an object based on the class.

### Passing information into the MaterialApp class

The ```MaterialApp()``` class expects arguments. We pass a ***named*** argument. We target the argument named "home" and pass a value to it.

```dart
return MaterialApp(home: )
```

The "home" argument requires another widget. This is the widget that will be drawn on the screen when the app loads. Here we typically use the ```Scaffold``` widget. This adds a screen with a background and the ability to add an ```AppBar```.

Scaffold also takes arguments:

One of them is ```appBar:```, which takes an ```AppBar``` widget as an argument.   AppBar takes a ```Text``` widget as its ```title:``` argument.

The text widget simply takes a string as its argument.

This is what our code looks like so far:

```dart
import 'package:flutter/material.dart';

main() {}

class MyApp extends StatelessWidget {
  build(context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Test'),
        ),
      ),
    );
  }
}
```

However, this won't show anything on the screen yet because we are not excecuting any code in our ```main``` function.

We need to call ```runApp()``` in the ```main``` function. ```runApp()``` takes a widget as an argument. Here we will pass the constructor of our ```MyApp``` class -  so we create an actual object based on that class.

```dart
main(){
  runApp(MyApp());
}
```

If we run our app now, we should see an empty screen with an ```AppBar``` at the top.

### Optimising our dart code

Dart is a ***typed*** language. This means we should define the types our methods use or our variables store.

The IDE can use that information and warn us if we use a wrong type. Dart is often able to **infer** the type of an object without explicitly specifying it.

For example, we  could do:

```dart
class MyApp extends StatelessWidget{
  Widget build(BuildContext context){
    //continued
  }
}
```

But we don't actually need to specify that the ```build()``` method expects that something of type "Widget" will be returned - Dart already knows that. The same is true for "context", we don't actually need to specify that "context" is of type ```BuildContext```. 

Stopped at 1:37:15

# Everything below title this needs to be reorganized
# ------------------------------------------------------------------

Flutter UI is composed exclusively of widgets. They are the foundation of Flutter apps. A widget is a description of part of a user interface.

Even themes, animations, layout and gesture detectors are widgets in Flutter.

There are both stateless and stateful widgets. 

Stateless widgets are **immutable**. Once created, its properties can't change. We instatiate each widget by passing some parameters.

Example - instantiating a container widget with some properties:

```dart
var container = Container(
    color: Colors.purple,
    width: 300.0,
    height: 400.0,
    child: Text('Hello')
);
```

Most widgets have an optional child or children property, allowing us to nest widgets in other widgets.

* Child -> widgets that only expect one child (for example padding or material app)
* Children -> widgets that take in a list of children, such as columns, ListViews or Stacks.

We are, however, allowed to create widgets without a child, we don't have to specifically set the child property to ```null```.

[Here](https://flutter.dev/docs/development/ui/widgets) is a widget catalog with all the official widgets in Flutters collection.

### Overview



To show something on the app screen, we need to import the material package. A package is a library of functions we can use.

```dart
import 'package:flutter/material.dart';
```

By importing that package, we can run our app by adding ```runApp()``` to the ```main``` function. It takes a widget as an argument. For example:

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(
    Container(
      color: Colors.greenAccent,
    ),
  );
}
```

This would show an empty app with a green background.

However, we won't actually build our app step by step like this.

Flutter has a lot of built-in widgets, the standard one would be a ```MaterialApp``` which offers some basic functionality we want in an app. (Title, theme, what to do on a back button press).

Another one is the ```Scaffold``` which is usually built inside the ```MaterialApp```. It offers drawers, app bars, bottom navigation, tabs and floating action buttons.

In Dart there are **top level functions**. This means that functions can be outside of classes.

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(
    MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(
          title: Text('Test App'),
        ),
        body: Container(
          color: Colors.greenAccent,
        ),
      ),
    ),
  );
}
```

This shows an empty app with an AppBar.

However, specifying our whole app body inside the main function can get quite hard to read.

```dart
Widget helloRectangle(){
  return Container(
    color: Colors.greenAccent,
  );
}

void main() {
  runApp(
    MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(
          title: Text('Test App'),
        ),
        body:helloRectangle()
      ),
    ),
  );
}
```

Here, the Container is created in the ```helloRectangle``` function.

We can use a ```Stateless Widget``` and pass arguments for the widget's color or text in its constructor function:

```dart
class HelloRectangle extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.greenAccent,
    );
  }
}
```

While pressing Alt + Enter while the cursor is on the container's name, we can wrap it - for example center it.

Here is our HelloRectangle class with some text and additional formatting:

```dart
class HelloRectangle extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Center(
        child: Container(
      color: Colors.greenAccent,
      height: 400.0,
      width: 300.0,
          child: Center(
              child: Text(
                'Hello', style: TextStyle(fontSize: 40),
              )
          ),
      ),
    );
  }
}
```

### Custom widgets

Widgets are really customizable, we can extend and customize the exisiting widgets.

For example, we can use the basic ```ListTile``` widget and customize it.

We can use Container, Row, Padding, Center, And Inkwell widgets to position our Icon and Text widgets the way we want.

The ```Inkwell``` widgets provides an animation when we tap a widget.  We can adjust the inkwell's border radius to get rounded corners for our inkwell animation.

## App layout

All layout is done with widgets. Each widget is responsible for its own layout.

### Route

A route takes us to a page or a screen in our app. Inside ```MaterialApp``` we often set the home property to a widget that is our home route.

An ```AppBar``` is useful for telling the user where they are in the app and can offer actions for the user.

Most apps have some sort of ```ListView``` or ``'GridView```

### Grouping

Grouping several widgets together makes it easier to customize just specific ones and leaving other widgets unmodified.

## Navigation

How do we navigate between our routes?

The ```Navigator``` widget manages our routes. It can push and pop routes to help a user move form screen to screen.

A route takes us to a page or screen. We can pass context between routes.

Each ```InkWell``` widget, for example, has an ```onTap``` property. We can use it to navigate to a certain route.

## Stateful widgets

Widgets can change, allowing for user interactivity. To save states and respond to user ineraction, we use a ```StatefulWidget```.

Example:

```dart
class HelloRectangle extends StatefulWidget{
  final String text;

  HelloRectangle(
    {
      this.text,
    } );

    @override
    createState() => _HelloRectangleState();
}
```

The ```StatefulWidget``` instance itself is immutable, but it creates a state object using ```createState```.

The state object stores the widget state and can change throughout the widgets lifetime. Things that are specified within that object can be changed.

Let's say we want to change the color of a widget every time it is pressed:

```dart
FlatButton(
  onPressed: () {
    print('I was pressed!');
    setState(() {
        _color = _generateRandomColor();
    });
  }
)
```

Calling ```setState()``` schedules a rebuild on the next frame.

When a widget state changes, **only** the widgets that changed are rebuilt.

When the state object is initialized, we can add custom code by overriding the ```initState``` method.

# Building interactive apps

## Material Design

In Flutter, material components are widgets that follow the Material design guidelines. Material Design is built into Flutter, Flutter embraces the Material design language.

Material Design is a design system developed by Google.

These widgets have properties that enable customization. For example, buttons and outlines can be given different shapes, gridviews can be heavily customized beyond the standard table like layout.

## Platforms and Themes

A Flutter app is native to both iOS and Android, using the same codebase.

To use Cupertino widgets (iOS) too, we need to import the cupertino package as well:

```dart
import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';
```

Then we can choose whether we want to show a material widget or a cupertino styled widget.

We can customize the master theme and its properties. Child widgets are able to inherit the master theme's styling. 

For example: Let's say we always want our text to be blue. We set the ```textTheme``` property of our ```MaterialApp``` widget to be the existing theme.

```dart
theme: ThemeData(
  textTheme: Theme.of(context).textTheme.apply(
    bodyColor: Colors.blue[700],
    displayColor: Colors.grey[600],

    //... continued
  )
)
```

We override the default theme with the ```apply``` function. We can do this with all the properties within the theme widget.