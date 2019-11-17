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

## Adding an infinite scrolling ListView

We add a ```_suggestions``` list to the RandomWordsState class for saving suggested word pairings. We also add a ```_biggerFont``` variable for making the font size larger.

```dart
class RandomWordsState extends State<RandomWords> {
  final _suggestions = <WordPair>[];
  final _biggerFont = const TextStyle(fontSize: 18.0);
  // ··· Rest of the class
}
```

Then we add a ```_buildSuggestions()``` function to the RandomWordState class. This method builds the ListView that displays the words.

The ```ListView``` class provides a builder property - itemBuilder. That's a factory builder and callback function specified as an anonymous function.

Two parameters are passed to the function - the ```BuildContext``` and the row iterator. The iterator increments each time the function is called. In our case, it increments twice for every suggested word pairing (once for the ```ListTile``` and once for the ```Divider```). This allows the list to grow infinitely as the user scrolls.

```dart
class RandomWordsState extends State<RandomWords> {
  final _suggestions = <WordPair>[];
  final _biggerFont = const TextStyle(fontSize: 18.0);

  Widget buildSuggestions() {
    return ListView.builder(
        padding: const EdgeInsets.all(16.0),
        itemBuilder: (context, i) {
          if (i.isOdd) return Divider();

          final index = i ~/ 2;
          if (index >= _suggestions.length) {
            _suggestions.addAll(prefix0.generateWordPairs().take(10));
          }
          return _buildRow(_suggestions[index]);
        });
  }
```

The ```itemBuilder``` is called once per suggested word pairing. For even rows, it adds a ```ListTile``` row for the word pairing. For odd rows, it adds a ```Divider``` widget to visually separate the entries.

```final index = i ~/ 2;``` divides ```i``` by 2 and returns an integer. This calculates the actual number of word pairings in the listView, minus the divider widgets.

Once we reach the end of the already created word pairings in ```suggestions```, we generate 10 more and add them to the suggestions list.

This method calls the ```_buildRow()``` function once per word pair. This function displays each new pair in a ```ListTile```.

Let's add the ```_buildRow()``` function to ```RandomWordsState```:

```dart
Widget _buildRow(WordPair pair) {
    return ListTile(
      title: Text(
        pair.asPascalCase,
        style: _biggerFont,
      ),
    );
  }
  ```

This is the function that actually creates the ListTile.

Now we want to call the ```buildSuggestions()``` function in the ```build()``` method of the ```RandomWordsState``` class.

```dart
Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Startup Name Generator'),
      ),
      body: buildSuggestions(),
    );
  }
```

Finally, in the ```MyApp``` class, we update the ```build()``` method by changing the home to be a ```RandomWords``` widget:

```dart
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Startup Name Generator',
      home: RandomWords(),
    );
  }
}
```