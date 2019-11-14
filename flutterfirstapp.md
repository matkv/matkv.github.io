---
layout: page
title: Flutter startup namer
exclude: true
---

# Startup namer app with Flutter

This app will be a Material app.

The ```main()``` method uses arrow (=>) notation. This is used for one-line functions or methods.

The app extends ```StatelessWidget``` -  this makes the app itself a widget. In Flutter, almost everything is a widget - including alignment, padding and layout.

The ```Scaffold``` widget provides a default app bar, title, and a boddy property that holds the widget tree for the home screen.

A widget's main job is to provide a ```build()``` method that describes how to display the widget in terms of other, lower level widgets.

## Using an external package

To find Dart packages, a great site is [pub.dev](https://pub.dev/).

For this example app we will use the package named ```english_words```, which contains a few thousand of the most used English words + some utility functions.

We add a **dependency** to the ***pubspec.yaml*** file, then click "Packages get" in Android studio and the package will be downloaded.

We now import this package to our main.dart file:

```dart
import 'package:english_words/english_words.dart';
```

In the main.dart file, we create a random wordPair using that library's functions, and then set the child property of the body to use that wordPair as the text:

```dart
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final wordPair = WordPair.random();
    return MaterialApp(
      title: 'Welcome to Flutter',
      home: Scaffold(
        appBar: AppBar(
          title: Text('Welcome to Flutter'),
        ),
        body: Center(
          child: Text(wordPair.asPascalCase),
        ),
      ),
    );
  }
}
```

## Adding a stateful widget

State ***less*** widgets are immutable, their properties can't change at all.

State ***full*** widgets can change during the lifetime of the widget.

Implementing a stateful widget requires at least two classes:

* a StatefulWidget class that creates an instance of a
* State class

The StatefulWidget is, itself, immutable but the State class persists over the lifetime of the widget.

We add it to the bottom of the main.dart file:

```dart
class RandomWordsState extends State<RandomWords> {
  //TODO Add build() method
}
```

```State<RandomWords>``` indicates that we are using the generic ```State``` class specialized for use with ```RandomWords```.

Most of the app's logic and states will be in the ```RandomWords``` class. This class will save the generated word pairs, the list of them grows infinitely as the user scrolls and there will be favorite word pairs that the user can add or remove from the list with the heart icon.

At the moment, we don't even have a ```RandomWords``` class. Let's add it to the main.dart file:

```dart
class RandomWords extends StatefulWidget {
  @override
  RandomWordsState createState() => RandomWordsState();
}
```

Now we'll add a basic build method that generates the word pairs by moving the word generation code to ```RandomWordsState```.

```dart
class RandomWordsState extends State<RandomWords> {
  @override
  Widget build(BuildContext context) {
    final wordPair = WordPair.random();
    return Text(wordPair.asPascalCase);
  }
}
```

This creates the wordPair inside the RandomWordsState class. The widget created in the ```build``` method returns a ```Text``` widget.

So we can set the ```child``` property of the ```body``` property of the widget that is created in the ```MyApp``` class to our newly created ```RandomWords()``` class - it creates a ```RandomWordsState``` - and the build method of that returns a Text widget.

```dart
body: Center(
          child: RandomWords(),
        ),
```

Stopped at "Step 4: Create an infinite scrolling widget".