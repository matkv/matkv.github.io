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

But we don't actually need to specify that the ```build()``` method expects that something of type "Widget" will be returned - Dart already knows that. The same is true for "context", we don't actually need to specify that "context" is of type ```BuildContext```.  However, it can be helpful to specify the type in order to improve readability.

If we have a function that only contains one line, like for example:

```dart
void main() {
  runApp(MyApp());
}
```

We can instead use the **fat arrow notation**:

```dart
void main() => runApp(MyApp());
```

To be exact, the ```build()```method of a widget needs to be ***overriden*** in order to be able to modify it. We override a method defined by another class - in this case ```StatelessWidget```. So technically we could add the ```@override``` above our build method, but it is not required.

```dart
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // continued..
```

Stopped at 1:37:15

### The widget's body

The ```body``` property of the ```Scaffold``` widget contains the actual content that we will see in it.

While we will modify our widgets and customize them, at the end, we will always use Flutter's built in widgets as a base.

Let's say we want the body of our Scaffold to have a ```Card```widget in it, and the card itself should have **two** other widgets as its children. For that, we can use the ```Column``` widget.

```Column``` takes multiple wigets, ***children** as arguments wich will be positioned from top to bottom above each other.

```dart
body: Card(child: Column(children: <Widget>[
          Image(),
          Text('Food Paradise')
        ],),),
```

In order to add a source image to our Image widget, we create a folder for our assets (it's good to name it 'assets'), and specify that folder in the **pubspec.yaml** file.,

We uncomment the ```assets``` property, and add the path to our file (with an indentation) like this:

```yaml
  assets:
    - assets/food.jpg
```

If we want our image to use an asset directly, we can use a special constructor:

```dart
 body: Card(child: Column(children: <Widget>[
          Image.asset('assets/food.jpg'),
          Text('Food Paradise')
        ],),),
```

### Finding examples of widgets

The most important widgets that we will be using are the **Material Components** widgets. They can be found [here](https://flutter.dev/docs/development/ui/widgets/material).

### Adding more cards to the list

We wrap our first card into a column, and add a button above the first card:

```dart
 body: Column(
            children: <Widget>[
              RaisedButton(
                onPressed: () {},
                child: Text('Add Product'),
              ),
              Card(
                child: Column(
                  children: <Widget>[
                    Image.asset('assets/food.jpg'),
                    Text('Food Paradise')
                  ],
                ),
              ),
            ],
          )),
```

The ```RaisedButton``` widget takes a child widget - the text we display (this could also be an icon for example), and it needs to have an ```onPressed``` property: this is what happens when the button is pressed.

For now, we have added an ***anonymous function*** (empty arguments, empty body) that does nothing:

```dart
onPressed: () {},
```

We also wrap the button in a ```Container``` widget with some margin to make it have some spacing at the bottom edge of our AppBar.

Creating the margin:

```dart
 Container(
   margin: EdgeInsets.all(10.0),
```

### Stateless vs. Stateful widgets

Now let's add some functionality to the button:

We typically manage a list of data. The ```build()``` method will be called whenever the app first starts or **when some of our data changes**.

We want to be able to add a new card whenever the button is pressed -  a new card should be added to our list of cards. **We can't do that in a stateless widget.** A stateless widget is simply able to accept external data and build a widget tree. It **can't work with internal data** and will not **rebuild when some of the data changes**.

A stateless widget will only rebuild when it is called for the first time or when it receives some ***external*** data.

```State``` can simply be translated as "data that we are working with". Data that we are storing in our widget and that we plan to change.

That's why we change our ```MyApp``` widget to inherit from a ```StatefulWidget``` instead.

#### Stateless widget

```dart
class MyApp extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    // TODO: implement createState
    return null;
  }
}
```

The ```createState``` function returns a ```State```. This object will belong to a ```StatefulWidget```. The way we work with state in Flutter is that we have **two classes that will work together**.

```createState()``` will return a state object with a state that is configured to work with a ```StatefulWidget```.

Let's create the second class that is needed to work with states:

```dart
class _MyAppState
```

The "_" at the beginning is a convention for classes that should not be usable by other files - only from inside the current file. Flutter will respect this.

The ```State``` class provided by flutter has a build method. Now we need to tell Flutter that our class inheriting from ```State``` belongs to a specific widget.

We add the name of the class to which this state belongs in angle brackets:

```dart
class _MyAppState extends State<MyApp> {
  //...
}
```
In our ```MyApp``` class, we return and instantiate our new state:

```dart
class MyApp extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    // TODO: implement createState
    return _MyAppState();
  }
}
```
Now the ```StatefulWidget``` creates a new state object based on our own ```_MyAppState``` class. Flutter will internally call the ```build()``` method for it.

Now we add a property to the ```_MyAppState``` class:

```dart
class _MyAppState extends State<MyApp> {
  List<String> _products = ['Food Tester'];
```

We want that list to be converted to a list of cards. In order to do that, we will use the ```map()``` function of the list. It allows us to transform every element in the list into something new.

```dart
_products.map((element) => Card(
                child: Column(
                  children: <Widget>[
                    Image.asset('assets/food.jpg'),
                    Text(element)
                  ],
                ),
              )) 
```

We take each element in the products list, and map it to a ```Card``` widget. For the widget's text, we can use ```element``` directly, since it is just a string.

Because the ```children``` property expects an actual widget and not a "iterable<Card>" that we currently create, we additionally need to wrap all of this into a new Column widget and convert it to a List:

```dart
Column(
                children: _products
                    .map((element) => Card(
                          child: Column(
                            children: <Widget>[
                              Image.asset('assets/food.jpg'),
                              Text(element)
                            ],
                          ),
                        ))
                    .toList(),
              ),
``` 

Now a separate card will be created for each element in the ```_products``` list.

##### Adding functionality to the button

For now, let's add a hardcoded additional element to _products when the button is tapped:

```dart
child: RaisedButton(
                  onPressed: () {
                    _products.add('Advanced Food Tester');
                  },
```

This alone however won't change anything visibly. Flutter doesn't watch all data by default, we have to tell it that we are changing the state of our ```StatefulWidget```.

We do this by calling a special method, the ```setState()``` method, and then calling the code that changes our data inside of it.

```dart
 child: RaisedButton(
                  onPressed: () {
                    setState(() {
                      _products.add('Advanced Food Tester');
                    });
                  },
                  child: Text('Add Product'),
                ),
```

Now pressing the button will actually add a new card.

### Splitting up our code

We typically don't put all of our code into one root widget or its state. We split our app into granular pieces and distribute them into multiple files. That way each file stays maintanable and readable.

We can create a new file that holds just one class. When creating new files, we need to import everything we need again, it doesn't take over from our main.dart file.

Let's create a separate file that holds our Card widget that displays one element from the products list. Our products widget actually just receives a list of products and that list might be changed -  but it is changed outside of our products widget.

The widget itself can actually be a **stateless** widget.

Our new products.dart file:

```dart
import 'package:flutter/material.dart';

class Products extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Column(
                children: _products
                    .map((element) => Card(
                          child: Column(
                            children: <Widget>[
                              Image.asset('assets/food.jpg'),
                              Text(element)
                            ],
                          ),
                        ))
                    .toList(),
              );
  }
}
```

Now the only problem is that we don't know the ```_products``` list in this file. We have to get that data from outside. We can do this by adding a **constructor** and a **property** to our class:

This would be a normal constructor:

```dart
Products() {

  }
```
But we actually just want to take an argument in our constructor, and then write it to a property. We can do that in this short way, Flutter automatically sets the ```products``` property to the value of the constructor argument:

```dart
class Products extends StatelessWidget {
  List<String> products;
  
  Products(this.products);
```
This allows us to pass data into ```Products``` and immediately bind it to a property.

Because we have a StatelessWidget, we have to specifically mark our property as immutable (not changeable). We do this with the ```final``` keyword.

```dart
final List<String> products;
```

This tells Flutter that the value of ```products``` will never change after being initialised once.

Let's create another file that will handle adding something to the ```products``` list.

We create a ```_ProductManager``` class and its ```_ProductManagerState``` containing the button code:

```dart
import 'package:flutter/material.dart';

class ProductManager extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {    
    return _ProductManagerState();
  }
}

class _ProductManagerState extends State<ProductManager> {
  List<String> _products = ['Food Tester'];

  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Container(
      margin: EdgeInsets.all(10.0),
      child: RaisedButton(
        onPressed: () {
          setState(() {
            _products.add('Advanced Food Tester');
          });
        },
        child: Text('Add Product'),
      ),
    );
  }
}
```

Now we want to use our ```Products``` class inside here. We have to import it:

```dart
import './products.dart';
```
The products widget (the list of cards) should appear below the button. We wrap both the button and the products widget in a Column and pass the ```_products``` list as an argument for the ```Products()``` constructor:

```dart
class _ProductManagerState extends State<ProductManager> {
  List<String> _products = ['Food Tester'];

  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Column(children: [
      Container(
        margin: EdgeInsets.all(10.0),
        child: RaisedButton(
          onPressed: () {
            setState(() {
              _products.add('Advanced Food Tester');
            });
          },
          child: Text('Add Product'),
        ),
      ),
      Products(_products)
    ]);
  }
}
```

Now we can use our new ```ProductManager``` in the main.dart file. Also, because we are not handling any state in the main.dart file anymore, we can change it to a ```StatelessWidget```.

```dart
import 'package:flutter/material.dart';
import 'package:flutter_course/product_manager.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.deepOrangeAccent,
          title: Text('EasyList'),
        ),
        body: ProductManager(),
      ),
    );
  }
}

```

The body of the Scaffold is now created completely in the ```ProductManager``` class. This code is now way easier to read and to manage.

This is how we generally want to structure our Flutter apps:

* We want to split up our user interfaces & components across multiple files
* Work with Stateful and Stateless widgets
* Use as many Stateless widgets as possible
* A few selected Stateful widgets which manage our data


What if our stateful widget wants to receive some data from outside?

Let's say that we don't have the starting values for the  ```_products``` list in the ```product_manager``` file and instead get it from ```main.dart```.

We again create a constructor and property for the ```ProductMananager``` class:

```dart
class ProductManager extends StatefulWidget {
  final String startingProduct;
  ProductManager(this.startingProduct);
```

The ```State``` changes in the ```_ProductManagerState``` class, not in the widget class. So here we have to use the ```final``` keyword. The only way to change it would be to recall the build function of the parent object.

A helpful property that gives us access to all the properties of the widget that belongs to the state is called ```widget```.  But we can only use it inside of methods, not directly at the properties.

The ```State``` class let's us implement some special methods, like the ```initState``` method.

```dart
 @override
  void initState() {
    super.initState();
  }
```

This method will be called whenever this ```State``` object is created. It runs even before ```build()``` runs. So we can actually use the ```widget``` property inside here:

```dart
  @override
  void initState() {
    _products.add(widget.startingProduct);
    super.initState();
  }
```

Now in order to use our new functionality we obviously need to actually pass in an argument when creating a new ```ProductTester``` object in main.dart

```dart

        body: ProductManager('Food Tester New'),
```

### Stateless vs. Stateful Lifecycle

#### Stateless Widget
Input Data (Data can change externally) --> Widget --> Renders UI (Gets (re)-rendered when input data changes)

It has a ```Constructor Function``` and a ```build()``` function to draw something on the screen. **That is all.** These are the two functions that will be called in the life of a stateless widget.

#### Stateful Widget
Input Data (Data can change externally) --> Widget & Internal State --> Renders UI (Gets (re)rendered when input data changes)

It also has a ```Constructor Function```, then ```initState()``` is called before we call the ```build()``` method for the first time.

After that we can call the ```setState()``` function (for example when a button is pressed or an HTTP request finishes) and that would rebuild it.

We can also have some changes to our external data - in this case ```didUpdateWidget()``` would execute -  for example if we pass data to the widget - and then ```build()``` would run again.

STOPPED AT 2:29:35

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