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

--- 

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
  
