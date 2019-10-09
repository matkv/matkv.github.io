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

### Concise code

#### Construction and initialization

Lambda expression to subscribe a new event handler to a button's click event:

```csharp
button.Click += (sender, args) => MessageBox.Show("Clicked"!);
```

Object and collection initializers let us quickly initialize an object and set properties during initialisation:

```csharp
var order = new Order
{
    OrderID = "xyz",
    Customer = new Customer{ Name = "Jon", Address = "UK"},
    Items =
    {   
        new OrderItem { ItemId = "abcd123", Quantity = 1 },
        new OrderItem { ItemId = "fghi456", Quantity = 2 }
    }
}
```

#### Method and property declarations

Instead of doing:

```csharp
private string name;
public string Name
{
    get { return name; }
    set { name = value; }
}
```

We can use an automatically implemented property:

```csharp
public string Name {get; set;}
```

Let's say we have a class with the members ```Count``` and ```GetEnumerator``` and we have a list (a collection of strings for example) and we want to delegate the ```Count``` and ```GetEnumerator()``` members of our class to that collection.

```csharp
public int Count => list.Count;

public IEnumerator<string> GetEnumerator() => list.GetEnumerator();
```

#### String handling

* Information attributes -> ability for compiler to automatically populate method and filenames as parameter values.
* ```nameof``` -> allows names of variables, types, methods and other members to be represented in a refactoring-friendly form.
* Interpolated string literals -> value of a variable or property can be used directly

Interpolated string literals example:

```csharp
throw new KeyNotFoundException($"No calendar system for ID {id} exists");
```