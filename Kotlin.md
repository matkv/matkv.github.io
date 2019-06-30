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

**Non null check**

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

TODO

## Lists & Collections

### Making a list nullable

```kotlin
var list: List<Int?> = listOf(null,null)
```

```kotlin
var list2: List<Int>? = null
```

When creating a list with ```val```, only the variable is immutable, not the list itself.
