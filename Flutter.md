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

## Profile or release runs

Debug mode trades performance for useful developer features such as hot reload and step debugging. Once we are ready to analyze performance or release our app, we'll want to use Flutter’s “profile” or “release” build modes. 

## Arrow notation

Arrow notation is used for one-line functions or methods.
```dart
void main() => runApp(MyApp());
```