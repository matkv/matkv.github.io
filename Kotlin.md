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

**Functions** are declared using the ```fun```keyword. No semi-colons at the end are needed.

**Variables** can be declared using ```val``` (only assignable once) or ```var``` (changeable). The type is inferred and unchangeable during compile time. There is not implicit numerical conversion (for example int to float), in Kotlin we use casting instead.  

By default a value cannot be ```null```:
```kotlin
kotlin var rocks : Int = null     //doesn't work
var rocks : Int? = null    //works, the ? makes it nullable
```
  
The type of a variable is set by adding with a colon after the name. 
```kotlin
var amount : Int
```
The type ```Any``` can hold any type of object.

```kotlin
var rocks : Int = null  
```
