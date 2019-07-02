---
layout: page
title: Kotlin
permalink: /kotlin/
toc: true
---

**Table of contents**

* Un-numbered table of contents
{:toc}

## Basic Info

Kotlin is a language that removes a lot of boilerplate code and improves readability compared to languages like Java. 

**Functions** are declared using the ```fun``` keyword. No semi-colons at the end are needed.

**Variables** can be declared using ```val``` (only assignable once) or ```var``` (changeable). The type is inferred and unchangeable during compile time. There is not implicit numerical conversion (for example int to float), in Kotlin we use casting instead.  

By default a value cannot be ```null```:
```kotlin
var rocks : Int = null     //doesn't work
var rocks : Int? = null    //works, the ? makes it nullable
```
  
The type of a variable is set by adding with a colon after the name. 
```kotlin
var amount : Int
```
The type ```Any``` can hold any type of object.

#### Non null check

```kotlin
return fishFoodTreats?.dec() ?:0
```
Explanation: if the object is not ```null``` -> use a treat + return new value + remove one treat (decrease method), else return 0. This is done with the ```?:``` Elvis operator.

### Mathematical operators

  Add (+)
  ```kotlin
  2.plus(71)
  ```
  
  Subtract (-)
  ```kotlin
  2.minus(13)
  ```
  
  Multiply (*)
  ```kotlin
  2.times(4)
  ```
  
  Divide (/)
  ```kotlin
  2.div(4)
  ```

The mathematical operators can also be chained:
```kotlin
2.plus(71).plus(232).div(30).times(4)
```

### Switch

```kotlin
when(fishname.length){
0 -> println("print something")
in 3..12 -> println("print something else")}
```

## Functions 

```kotlin
fun printHello(){
}
```

- A Kotlin file has the extention ".kt".
- The ```main``` function is the entry point, the execution starts there.
- Every function returns something, if nothing is specified - it returns the type ```unit``` which has no value.
- Almost everything in Kotlin is an expression - it has a value (except for loops and while loops).
- If statements are possible directly when declaring a value or in a string.

```kotlin 
val isHot = if(temperature > 50) true else false 

val temperature : Int  = 25
val message = "You are " + if (temperature > 50) "fried" else "safe"    

```

- Parameters can have a default value. If nothing is specified, the default is used. A parameter can be specified by position or name.

```Kotlin
fun swim(speed : String = "fast")
```

We can create a function that checks for a certain condition in one line. This helps to simplify helper functions. It is also possible to use functions to set default parameters, but we should be careful with that because default parameters are evaluated at call time by Kotlin.

```kotlin
fun isTooHot(temperature : Int) = temperature > 0
```

Adding a ```!!``` after an object converts a non-nullable type to a unsafe nullable type. It will throw a ```NullPointerException``` if the value is null.

### Filters

Filters check if elements in a collection match a certain condition. ```it``` refers to each element on which we call the filter. For example, this filter filters out the elements that start with the letter 'p'.

```kotlin
println(decorations.filter {it[0] == 'p'})
```

In Kotlin, single quotes designate characters, double quotes designate strings. They are not interchangable.

Example: Print all curry spices sorted descending by length.

```kotlin
val spices = listOf("curry", "pepper", "cayenne", "ginger", "red curry", "green curry", "red pepper" )
println(spices.filter {it.contains("curry")}.sortedByDescending { it.length })
```

### Lambdas

A lambda is an expression that makes a function. We declare a function that has no name. It is always surrounded by curly brackets. We can declare a variable and assign it to a lambda, and then call it by adding () after the variable name.

For example: calling this by using swim() would print "swim":

```kotlin
val swim = {println("swim \n")}
```

Lambdas can take arguments just like named functions. Arguments go on the left side of a function and the body of the lambda goes after the function arrow.

```kotlin
var dirty = 20
val waterFilter = {dirty: Int -> dirty / 2 }

waterFilter(dirty)
```

Another example: waterFilter can be any function that takes an ```int``` and returns an ```int```.

```kotlin
var dirty = 20
val waterFilter: (Int) -> Int = {dirty -> dirty / 2}

fun feedFish(dirty: Int) = dirty + 10
```

Lambdas can be used with higher order functions (functions that take a function as an argument). Here we pass a variable and a function and the variable is used in the function:

```kotlin
fun updateDirty(dirty: Int, operation: (Int) -> Int): Int {
  return operation(dirty)
}
```

The function argument needs to be the last parameter. To pass a named function as a parameter, we need to add "::" before it. Function type notation is more readable, which reduces errors, clearly showing what type is passed in and what type is returned.

## Classes

Classes are blueprints of objects. Objects are instances of classes. Properties are characteristics of classes. Methods are the functionality of the class. Interfaces are a specification that a class can implement.

A constructor in Kotlin doesn't need a ```new``` keyword. If the class is called Aquarium, we create an instance by calling ```Aquarium```.

Kotlin automatically creates getters for properties.

Creating a property with overriden defaul getter & setter manually:

```kotlin
var volume : Int
        get() = width * height * length / 1000
        set(value) {height = (value * 1000) / (width * length)}
```

### Package Visibility

In Kotlin, everything is public by default.

Private -> only visible inside the file containing the declaration

Internal -> visible in the same module

Members of classes -> public by default, private -> only visible inside the class. Subclasses cant see. Protected -> Same as private, but subclasses can see. Internal -> same as above.

Creating member properties directly in contructor of the class:

```kotlin
class Aquarium(var length : Int = 100, var width : Int = 20, var height : Int = 40)
```

We can create a constructor with the ```constructor``` keyword and ```: this() {}``` at the end.

```init``` works just like a constructor, it is used to initialise our properties. It is used the way a contructor block would be used in other languages. There can be several of them and they are executed from top to bottom.

Instead of creating multiple constructors, in Kotlin its better to create additional functions that create the object with the desired parameters. For example:

```kotlin
fun makeDefaultFish() = Fish(friendly: true, volumeNeeded: 50)
```

Good Kotlin code has one constructor and (several) init blocks. When we need more flexibility, we should consider adding helper functions instead.

### Inheritance

Classes automatically inherit from the top level class 'Any' if nothing else is specified.

By default, classes & members are not subclassible (someone is able to inherit from it), so we have to make it open

```kotlin
open class Aquarium
```

### Interfaces

Difference abstract classes and interfaces -> abstract classes have constructors

Interface -> when we have a lot of methods and we want to enforce the use of these methods

Abstract class -> when we can't complete a class

### Data classes

For classes that mostly hold information/data

```kotlin
data class SpiceContainer(var spice: Spice){
    val label = spice.name
    }
```

For a class that shouldn't be instantiated multiple times we can use the ```object``` keyword.

```Enum``` classes can also just exist once and are used for storing multiple things.

```Sealed``` class -> can be subclasses, but only inside the file in which it is declared. Kotlin knows it staticly, at compile time. Useful for, for example, storing sucess messages when connecting to a network API.


## Lists & Collections, Extension functions, Generic classes, Annotations, Labeled Breaks

### Pairs

Can be used to return more than one value from a function. The function returns a pair and we destructure it on arrival.

```kotlin
fun giveMeATool(): Pair<String, String>{
    return ("fishnet" to "catching"
}

val (tool, use) = giveMeATool()

println(tool)
fishnet

println(use)
catching
```

### Lists

#### Operations on lists

Reversing a list:

```kotlin
println(testList.reversed())
```

```ListOf()``` gives us a list that we cannot change, but ```mutableListOf()``` gives us a mutable list.

```listName.contains()``` checks if a list contains a certain element.

```listName.subList()``` creates a sublist from the index (containing) that is the first argument to the index (excluding) that is the second argument.

We can also do sums on lists by using ```.sum```.

It is possible to map a value to another by using ``` val cures = mapOf("white spots" to "Itch", "red sores" to "hole disease")```

```kotlin
println(cures.get("white spots"))
println(cures["white spots"]
```

Or, if the value is not found, we can set a default answer. 
```kotlin
println(cures.getOrDefault("bloating, "sorry I dont know)
```

GetOrElse returns whatever is defined in curly brackets as the second argument -> could be a function.

MutableMap lets us put and remove elements in a mutable map (immutable wouldnt let us modify the collection afterwards).

#### Making a list nullable

```kotlin
var list: List<Int?> = listOf(null,null)
```

```kotlin
var list2: List<Int>? = null
```

When creating a list with ```val```, only the variable is immutable, not the list itself.

### Constants

The value of a const is determined at compile time. This means we cannot call a function to set its value. It only works in classes declared with ```object```, not in normal classes.

To use them inside a normal class, we have to wrap them into a ```companion object``` Difference to regular object: they are created when the object is created. We need to wrap constants in classes inside a companion object.

### Extension functions

Extension functions are used for utility functions. They allow us to add functionality to an existing class without having acces to its sourcecode. We can also use it to seperate the core API from helper functions.

Extensions functions are defined outside the class they extend. They don't get access to private variables. They are helper functions that only rely on the public API.

They are always resolved statically based on the variable they are applied to.

### Generic classes

Can hold any type of values. Generic type T. For example, MyList<T>. By default, T stands for the nullable "Any" type. Can be constricted by using, for example 
 
 ```kotlin
 class Aquarium<T : WaterSupply>(val waterSupply : T)
 ```
  
Using ```out``` before the type ensures that Kotlin uses it safely? out types can only be returned 
```in``` types can only be passed into an object    ***check this again***
  
Adding generics to a function 
```kotlin 
fun <reified T : WaterSupply>isWaterClean(aquarium: Aquarium<WaterSupply>)
```

```reified``` checks if it is a real type, and we have to use ```inline``` before the function. Then we can use, for example, is checks on the type.
  
Reified types can only be used at compile time.
 
If we don't want to specify the exact type we can use *
  
Type erasure -> all generic types are only used at compile time. At compile time, all the generic types are erased. That's why reified types exist.

### Annotations

Means of attatching metadata to code. They are read by compiler and used to generate code. Classes, function, methods can be annotated and some take arguments.
  
Created by 
```kotlin
annotation class ImAPlant
```
and then we can, for example, check if a class has a certain annotation and do something then. 
```kotlin
val classObj = Plant::class

for (annotation in classObj.annotation) { //do something } 
```

```@get``` can only be apllied to property getters, ```@set``` only to setters.

### Labeled breaks

In loops, we break at the ```break``` keyword and resume again at the label. They start with an identifier followed by the @ sign.

```kotlin
loop@ for (in in 1..100){
for (j in 1..100){
  if (i>10) break@loop
  }
 }
```
