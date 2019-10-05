---
layout: page
title: C#
permalink: /csharp/
---

**Table of contents**

* Un-numbered table of contents
{:toc}

### More fine-grained descriptions with generics

Instead of using

```csharp
public class Bookshelf
{
    public IEnumerable Books {get {...}}
}
```

we can specify the type of the IEnumerable and communicate more effectively

```csharp
public class Bookshelf
{
    public IEnumerable<Book> Books {get {...}}
}
```

### Nullable reference types

C#8 will expect that anything not explicitely nullable is intended not to be nullable.

```csharp
string Method(string x, string? y)
```

This means x shouldn't be ```null```, y may be ```null``` and the method won't return ```null```.

### Anonymous types and implicitly typed local variables (var)

These help address the downside of some statically typed languages: verbosity.

Sometimes we don't necessarily need to create a extra type for a partical data shape within a single method.

```csharp
var book = new {Title = "The Road", Author = "Cormac McCarthy"};

string title = book.Title;
string author = book.Author;
```

It is also not necessary to explicitly specify the type of a variable that is initialized in the same statement with the constructor.

```csharp
Dictionary<string, string> map1 = new Dictionary<string, string>();

//cleaner version

var map2 = new Dictionary<string, string>();
```

The second variable is still statically typed (not dynamically), but we didn't have to write the type explicitly.

We can't use anonymouse types as method parameters or return types.

#### Tuples instead of anonymous types

Instead of using the preceeding anonymous type, we could use the following:

```csharp
var book = {title: "The Road", author: "Cormac McCarthy"};

Console.WriteLine(book.Title);
```

A benefit of using tuples is that the **can** be used as method parameters and return types.

Stopped at 1.1.2 - "Even more consise code"