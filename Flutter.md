---
layout: page
title: Flutter
permalink: /flutter/
---

**Table of contents**

* Un-numbered table of contents
{:toc}

# Links

[Flutter Get Started](https://flutter.dev/docs/get-started/)

[Udacity Course](https://classroom.udacity.com/courses/ud905)

[Write your first Flutter app](https://flutter.dev/docs/get-started/codelab)

[Write your first Flutter app part 2](https://codelabs.developers.google.com/codelabs/first-flutter-app-pt2/#0)

[First Flutter App Example](https://matkv.github.io/flutterfirstapp.html)

[Flutter For Web Developers](https://flutter.dev/docs/get-started/flutter-for/web-devs)

# Flutter

Advantages of using Flutter:

* High-velocity development and multiplatform reach
* One codebase compiles to native arm code -> 
* Own renderer -> fast consistent UI across platforms and devices
* No bridging between framework and the widgets -> efficient rendering and smoother animations.

Flutter is written in Dart. Dart should feel familiar if we have experience with languages like Swift, Java, C# or JavaScript.

Dart is performant in development and in production. Supports both just-in-time and ahead-of-time compilation.

JIT compilation enables us to recompile code directly on the device, allowing a **hot reload**.

## Reactive framework

In Flutter, a view is built as an immutable tree of widgets.

Widgets are the foundation of Flutter apps. A widget is a description of part of a user interface. **Nearly everything in Flutter is a widget**.

There are no separate files for layout,customization or text alignment. It is all defined in the Flutter widget.

When a widget state changes, the widget rebuilds itself according to the new state.

The UI can be described as functions of state.

## Flutter's Development Tools

### Hot reload

The hot reload feature allows us to make changes in our app without having to rebuild & restart it.

### Flutter inspector

In Android Studio, under View -> Windows -> Flutter inspector we can enable the Flutter inspector (while our app is running).

This enables us to see the composition of existing widgets. By pressing the inspect button we can choose a specific widget to inspect (with the mouse or with our touchscreen on the actual device).

### Dart Code Formatter

Under Code-> Reformat Code with Dart format, we can let Android Studio format our code according to Dart Style Guides.

## Widgets

Flutter UI is composed exclusively of widgets. They are the foundation of Flutter apps. A widget is a description of part of a user interface.

Even themes, animations, layout and gesture detectors are widgets in Flutter.

There are both stateless and stateful widgets. 

Stateless widgets are immutable. Once created, its properties can't change. We instatiate each widget by passing some parameters.

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


## TODO FIND BETTER CHAPTER FOR THIS
### Profile or release runs

Debug mode trades performance for useful developer features such as hot reload and step debugging. Once we are ready to analyze performance or release our app, we'll want to use Flutter’s “profile” or “release” build modes. 

### Arrow notation TODO Find better chapter for this

Arrow notation is used for one-line functions or methods.
```dart
void main() => runApp(MyApp());
```
