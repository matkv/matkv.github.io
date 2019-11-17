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

# Part 2 - Adding functionality to favorite names & viewing favorites

Now we will add functionality to select and unselect names, saving our favorites. The user will also be able to tap a list icon in the upper right of the app and navigate to a new page (called a ***route***) and view the favorited names.

## Adding icons to the list

We add a ```Set``` called _saved to ```RandomWordsState```. We use a Set instead of a List because a Set does not allow duplicate entries.

```dart
lass RandomWordsState extends State<RandomWords> {
  final _suggestions = <WordPair>[];
  final Set<WordPair> _saved = Set<WordPair>();
  final _biggerFont = const TextStyle(fontSize: 18.0);

```

In the function that actually creates the ListTile -> ```_buildRow``` we add a bool that lets us check whether or not a word pair has already been marked as favorite.

```dart
  Widget _buildRow(WordPair pair) {
    final bool alreadySaved = _saved.contains(pair);
```

And we add the heart icon. Depending on whether or not the current wordpair is already marked as favorite, the icon is either full and red or just the border with no color:

```dart
Widget _buildRow(WordPair pair) {
    final bool alreadySaved = _saved.contains(pair);
    return ListTile(
      title: Text(
        pair.asPascalCase,
        style: _biggerFont,
      ),
      trailing: Icon(
        alreadySaved ? Icons.favorite : Icons.favorite_border,
        color: alreadySaved ? Colors.red : null,
      ),
    );
  }
```

## Adding interactivity

Now we'll make the icons tappable. Whenever the user taps an entry in the list, it toggles its "favorited" state and the word pairing is added or removed from a set of saved favorites.

We modify the ```_buildRow``` function by adding an ```onTap``` property:

```dart
onTap: () {
        setState(() {
          if (alreadySaved){
            _saved.remove(pair);
          }
          else {
            _saved.add(pair);
          }
        });
      },
```
This is added after the Icon widget in _buildRow.

## Navigating to a new screen

We will add a new page (called a ***route***) that displays the favorites.

In Flutter, the Navigator manages a stack containing the app's routes. **Pushing** a route onto the Navigator's stack, updates the display to that route. **Popping** a route from the Navigator's stack, returns the display to the previous route.

We'll also add a list icon to the AppBar in the build method for ```RandomWordsState```. When the user clicks the icon, a new route that contains the saved favorites is pushed to the Navigator, displaying the icon.

### Adding the icon and its action

In the build method of ```RandomWordsState``` we add the actions property:

```dart
Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Startup Name Generator'),
        actions: <Widget>[
          IconButton(icon: Icon(Icons.list), onPressed: _pushSaved,)
        ],
      ),
      body: buildSuggestions(),
    );
  }
```

Some widgets properties take a single widget (child) - other properties, such as action, take an array of widgets (children). This is indicated by the square brackets.

Now we add a ```_pushSaved()``` function to the RandomWordsState class.

```dart
void _pushSaved() {
    
  }
```

### Adding a route and pushing it to the Navigator's stack

Pushing a route to the Navigator's stack changes the screen to display that new route.

The content for the new page is built in ```MaterialPageRoute```'s builder property, in an anonymous function.

We call ```Navigator.push```, which pushes the route to the Navigators stack.

```dart
void _pushSaved() {
    Navigator.of(context).push();
  }
```

The ```divideTiles()``` method of ListTile adds horizontal spacing between each listTile. The ```divided``` variable holds the final rows, converted to a list by the convenience function, ```toList()```.

```dart
 void _pushSaved() {
    Navigator.of(context).push(
      MaterialPageRoute<void>(
        builder: (BuildContext context) {
          final Iterable<ListTile> tiles = _saved.map(
              (WordPair pair) {
                return ListTile(
                  title: Text(
                    pair.asPascalCase,
                    style: _biggerFont,
                  ),
                );
              },
          );
```

This creates an Iterable (basically a collection or list) of ```ListTiles```, and maps each of the ```WordPair``` values in ```_saved``` to one ListTile.

```dart
final List<Widget> divided = ListTile
              .divideTiles(
              context: context,
              tiles: tiles,
          ).toList();
```
Then we actually create a list using the ListTiles in ```tiles```. ```divideTiles``` adds horizontal spacing between each ListTile - ```toList()``` actually converts the tiles with the dividers, to a list.

So ```divided``` holds the final rows with the dividers.

The ```builder``` property returns a ```Scaffold```, containing the app bar for the new route. The body consists of a ListView containing the ListTiles rows; each row is separated by a divider.

```dart
return Scaffold(
            appBar: AppBar(
              title: Text('Saved Suggestions'),
            ),
            body: ListView(children: divided),
          );
```

The complete _pushSaved function:

```dart
void _pushSaved() {
    Navigator.of(context).push(
      MaterialPageRoute<void>(
        builder: (BuildContext context) {
          final Iterable<ListTile> tiles = _saved.map(
              (WordPair pair) {
                return ListTile(
                  title: Text(
                    pair.asPascalCase,
                    style: _biggerFont,
                  ),
                );
              },
          );
          final List<Widget> divided = ListTile
              .divideTiles(
              context: context,
              tiles: tiles,
          ).toList();
          return Scaffold(
            appBar: AppBar(
              title: Text('Saved Suggestions'),
            ),
            body: ListView(children: divided),
          );
        },
      ),
    );
  }
```

## Change the UI using Themes

We can change our app's theme by adding the ```theme``` property in the ```MyApp``` class:

```dart
Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Startup Name Generator',
      theme: ThemeData(
        primaryColor: Colors.white,
      ),
```