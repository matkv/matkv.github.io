---
layout: page
title: Python
permalink: /python/
toc: true
---

**Table of contents**

* Un-numbered table of contents
{:toc}

## Basic Info

Ctrl + Shift + F10 runs the currently selected script in the console.

Expressions are made up of values and operators. They always evaluate down to a single value. Every value belongs to one data type. Comments are added using "#".

In a Python script, we can wait for user input by using ```input()```.

The ```str()``` and ```int()``` functions return a string/int. ```float()``` returns a float value.

For example:
```python
print('I am printing ' + str(int(numberVariable) + 1))    

#int() takes the content of numberVariable as an int
#str() turns it all into a string
```

### Strings

In Python, strings are defined by using ' ' single quotes. Strings can be concatenated by using a "+" and replicated using a "*".

```python
'Alice' + 'Bob'       #This will return 'AliceBob'
```

```python
'Alice' * 3       #This will return 'AliceAliceAlice'
```

If we want to get the length of a string, we can use the ```len(myString)```function.


## Flow Control

### Boolean

Two values: True & False (they need to be typed with a capital T or F)

#### Boolean operators

Check truth table. AND, OR, NOT...

### Comparison operators

They evaluate to a boolean value. 

```python
 ==
 !=
 <
 >
 <=
 >=
```


Integers and strings are always not equal to each other. Float values and integer values can be equal to each other.

### If - else - elif

```python
name = 'Alice'
if name == 'Alice':
  print('Hi Alice')
print('Done')
```

If the condition is true, the indented code is executed, otherwise the non indendet code is executed.

New blocks (part with new intendation) begin only after statements that end with a colon like in the IF statement.

```python
password = 'swordfish'
if password == 'swordfish':
  print('Access granted.')
else:
  print('Wrong password.')
```

Elif can follow an if statement. It let's us check for multiple conditions. As soon as one condition is met, all the other if statements are skipped. This means the order of the conditions **matter*.

```python
name = 'Bob'
age = 3000
if name = 'Alice':
  print('Hi Alice')
elif age < 12:
  print('You are not Alice, kiddo.')
```

When we set a variable based on ```input()``` a **blank string** would return false, all the other strings return true. For numbers, **0** or **0.0** return false, all others return true. ```bool(0)``` would return false.

### While loops

```python
test = 1
while test < 5:
  print('Hello world!')
  test = test + 1
```

```python
name = ''
while name != 'matko':
  print('Please type your name.')
  name = input()
print('Thank you')
```

```break``` causes our execution jump out of the loop.

```continue``` jumps back to the start of the loop and reevaluates our loop's condition.

### For loops

Loops a specific number of times.

```python
for i in range(5):
  print('Number of times this has been printed: ' + str(i+1))
```

Another example that adds all the numbers from 0 to 100.

```python
total = 0
for num in range(101):
  total = total + num
print(total)
```

Range function -> returns a value that's called a range object. Datatype range.

Usage ```range(10)``` gives us a range from 0 to 9. 

```range(12,16)``` starts at 12 and goes up to, but not including, 16.

Calling the range function with 3 arguments -> first is start, second is end, and the third is a **step** argument. It is the amount that the variable is increased after each iteration. Using a negative number for the step argument is possible too.

We can also use break and continue statements in for loops.

## Functions

### Built-in Functions

All Python programs can call a basic set of functions called built in functions. For example print, input and length.

Python also comes with a set of modules called the **standard library**. Each module is a Python program that contains a related group of functions that can be used in our programs. For example math module, random module.

First we must import the module.

```python
import random 
random.randint(1, 10)
```

We tell Python to look for a function inside a module by using the module name + the dot.

We can import multiple modules in one import statement.

Alternative form of import:

```python
from random import *
```

Now we don't have to add the module name before we use a function from the module. However this makes the code less readable since it is unclear where the function comes from.

If we want to exit a program before the last line we can use ```sys.exit()``` from the sys module. 

Modules that don't come diretly with Python are called **third party modules**. We can install them using the **pip** program which comes with python. It must be run with the terminal. An example for a third party module is the pyperclip module which offers copy and paste functions.

### Writing your own functions

Example function:

```python
def hello(name):
  print('Howdy' + name)
```

Arguments (parameters) go in between the parentheses.

Argument -> variable between parentheses at function call
Parameter -> variable between parentheses at function declaration

Function calls can be part of expressions because they evaluate to a value returned by the function.

**Every** function call has a return value.

In the function declaration we can specify the type of the return value.

```python
def plusOne(number):
  return number + 1
```

The return value **None** is a value of datatype None which is a datatype to describe a value that represents the lack of a value. If our function doesn't have a return statement, the return value defaults to the None type.

There are optional **keyword** arguments that let us set specific options in functions. For example the ```end``` keyword of the ```print()``` funtion which specifies the character that is added at the end of the value that is printed.

### Global and Local Scopes

A scope is basically a container of variables. The global scope is outside of functions, each function has its own local scope.

Variables that are **assigned in a function** exist in that local scope. 

Variables that are assigned out of all functions exist in the global scope.

A variable can't be both local and global.

The global scope is created when the program starts and is destroyed when the program terminates.

A local spope is created whenever a function is called - destroyed when the function returns.

Global variables can be accessed from anywhere, local variables only within the local scope.

To assign a global variable inside a function we can use the ```global``` keyword.

```python 
eggs = 'Hi'

def example()
  global eggs
  eggs = 'Hello'
  print(eggs)
```

"eggs" in this function will always refer to the **global** variable, so this will print "Hi".

## Handling errors with try/except

We can handle errors by using try and except statements.

```python
def div42by(divideBy):
    try:
        return 42 / divideBy
    except ZeroDivisionError:
        print('Error: you tried to divide by zero!')
```

An error that happens inside the try block will cause the except block to execute. We can catch specific exceptions by specifying the exact exception name. 

It is possible to catch all excptions by just not specifyng a specific type of exception and just using "except:", but this is generally not recommended.

We can also use:
```python
 except Exception:
 ```

The advantage of this over the bare except is that there are a few exceptions that it wont catch, most obviously KeyboardInterrupt and SystemExit.

## Lists

A list is a value that contains values. It contains multiple values in an ordered sequence. A list begins and ends with square brackets and the items are separated by a comma.

Example list of strings in Python:

```python
['cat', 'dog', 'mouse']
```

A list does not necessarily need to have values of the same type in it.

### Index
In order to access an item in a list, we use an integer index.

```python
listname[0]   #the first item
```

Lists can also contain other lists. The items inside them can be accessed using mulitple indexes.

```python
listname[0][1] #first list, second item in that list
```

If we use a negative index, we count backwards from the end of the list. ```listname[-1]```refers to the last item in the list.

### Slice

An index gets a single value from a list, a slice can get several values. The start and end are set using the a colon between them. The second index is not included.

```python
listname[1:3]   #this starts at index one and goes up to (not including) 3
```

An index returns a single value from a list, a slice returns a new list.

Leaving out the first index of a slice means it will begin at 0, leaving out the second index means the slice will go all the way to the end of the list.

```python
listname[:4]  #from start to index 4
listname[4:]  #from index 4 to end of the list
```

### Changing a list's values

```python
listname[1] = 'Hello'   #sets the second item in the list to a string value
```

We can delete values from a list using the **del** statement.

```python
del listname[2]   #deletes the third item
```

### Other list functions

We can get the number of items in a list using the ```len()``` function, concatenate lists using the ```+``` operator or replicate them using ```*```.

There is also a ```list()``` function:

```python
list('Hi') #returns ['H', 'i']
```

If we need to determine whether a value is or isn't in a list we can use the **in** and **not in** operators.

```python
'Dog' in ['Cat', 'Shark', 'Dog']  #returns true
```

### Using loops with lists

```python
for i in range(4)
  print(i)
```

range(4) has a return value that Python considers similar to [0,1,2,3].

A common technique is to use ```(len(somelist))``` with a for loop to iterate over the indexes of a list.

### In and not operators

With the in and not operators we can check whether a value is in a list or not. These expressions evaluate to a Boolean value.

```python
if name not in myList:
  print("Not in the list)
```

### Assigning multiple values at once

```python
cat = ['fat', 'black', 'loud']
size = cat[0]
color = cat[1]
disposition = cat[2]

#Can be simplified to:
cat = ['fat' 'black', 'loud']
size, color, disposition = cat
```

To use this, the number of variables and the length of the list must be exactly equal.

### Augmented Assignment Operators

If we want to use the value of a variable when assigning a new value, we can use augmented assignment operators.

```python
#So instead of writing
 
 apple = apple + 1

 #We can write 

 apple += 1
```

There are augmented assignment operators for the following operations:

* +=      this can also be used for string contatenation
* -=
* *=      this can also be used for list replication
* /=
* %=

### Methods

A method is the same thing as a function, except it is called on a value. The method comes after the value, separated by a period.

#### Finding a value in a list

For example, we can find a value in a list with the index() method.

```python
examplelist = ['hello', 'goodbye']
examplelist.index('hello')

#this returns 0
```
When there are duplicates in a list, the first occurence is returned.

#### Adding values to lists with append() and insert()

We can add values to the end of a list using the ```append()``` method and insert values at a specific index using the ```insert()``` function.

```python
listname.append('newvalue')

listname.insert(2, 'anothernewvalue')
```

In both cases, the lists are modified *in place*.

#### Removing values from lists with remove()

```python
listname.remove('somevalue')
```

If the value doesn't exist, this will throw an error. If the value appears multiple times in a list, the first instance of the value will be removed.

If we want to remove a value at a specific index, we use ```remove()```.

#### Sorting the values in a list with sort()

We can sort lists of number values or lists of string values using the ```sort()``` method.

```python
listname = [3,1,5,8]

listname.sort() #sorts the list
listname.sort(reverse=True) # sorts the list in reverse order
```

As with the insert() and remove() functions, the sort() function sorts the list in place.

We also can't use sort on lists that have both number values *and* string values.

Uppercase letters come before lowercase letters. The lowercase a is sorted so that it comes after the uppercase Z. If we need to sort the values in regular alphabetical order, we need to pass ```str.lower``` as the key argument in the sort() method call:

```python 
listname = ['a', 'z', 'A', 'Z']
list.sort(key=str.lower)
```

### Exceptions to indentation rules in Python

Usually the amount of indentation for a line tells us what block it is in.

An exception to this rule occurs when a list spans over several lines. Python knows that until it sees the ending square bracket, the list is not finished.

```python
spam = ['apples',
          'oranges',
                              'bananas',
'cats']
print(spam)
```

We can also split up a single instruction across multiple lines using the \ line continuation character.

```python
print('Four thousand and ' + \
'seven years ago')
```

This is helpful if we want to rearrange long lines of code to be more readable.

### List-like types: Strings and tuples

We can consider a string a "list" of single text characters. Many of the methods that are used on lists can be used on strings:

* indexing
* slicing
* for loops
* len()
* in and out operators

#### Mutable and immutable data types

But lists and strings are different datatypes. A list is a **mutable** datatype - it can have values added, removed or changed. A string is **immutable**. It cannot be changed.

The only way to "mutate" a string is to use slicing and concatenation to build a new string out of the old string. In this example the string is not actually modified, we just pick the parts we need from the old string and create a new string:

```python
name = 'Zophie a cat'
newName = name[0:7] + 'the' + name[8:12]

#newName now returns 'Zophie the cat'
```

In the following example, the values of the list are not changed, but a new and different list value is overwritten over the old one:

```python
eggs = [1,2,3]
eggs = [4,5,6]
```

If we were using methods like append() or del(), we would be actually modifying the old list, because those changes would happen *in place* - the value is not replaced with a new value.

#### The tuple data type

Tuples are almost identical to a list, except two differences:

* Tuples are typed with parentheses -> ```eggs = ('hello', 42, 0.5)```
* They are **immutable**

If we only have one value but we want to indicate that we are using a tuple, we can just add a trailing comma:

```python
test = ('hello',) #this is a tuple
test = ('hello')  #this is a string
```

We can use tuples to make people reading our code understand that we don't intend for these values to change. Python can also use some optimizations to make using tuples a bit faster than lists.

We can convert types with the **list()** and **tuple()** functions.

### References

Variables store string and integer values like this:

```python
cheese = 40
milk = cheese
milk = 100

#cheese still returns 40
#milk returns 100
```

Lists don't work that way. When we assign a list to a variable, we are actually assigning a list **reference** to the variable. That is a value that points to a list. The list is always the same one, it is just referenced from two places.

```python
firstlist = [1,2,3,4,5]
secondlist = firstlist
secondlist[1] = 9

#now both firstlist and secondlist return [1,9,3,4,5]
```

Variables will contain references to list values rather than list values themselves. But for strings and integer values, variables simply contain the string or integer value. Python uses references whenever variables must store values of mutable data types, such as lists or dictionaries.

For values of immutable data types such as strings, integers, or tuples, Python varables will store the value itself.

#### Passing references

When a function is called, the values of the arguments are copied to the parameter values. So, for lists and dictionaries, a copy of the reference is used.

```python
def someMethod(someParameter):
  someParameter.Append('Hello')
  
someList = [1,2,3]
someMethod(someList)

#someList now returns [1,2,3,'Hello']. By using the reference of the list, it has been modified in place. Even though someList and someParameter contain separate references, they both refer to the same list.
```

#### The copy() and deepcopy() functions

Sometimes we might not want to change the referenced lists values and keep that original list or dictionary the way it is. For this, Python provides a module named copy that provides both the copy() and deepcopy() functions.

copy.copy() can be used to make a duplicate value of a mutable value (like a list or dictionary).

```python
import copy
spam = ['A', 'B', 'C', 'D']
cheese = copy.copy(spam)
cheese[1] = 42

spam
['A', 'B', 'C', 'D']
cheese
['A', 42, 'C', 'D']
```

If the list we need to copy contains other lists, we need to use **copy.deepcopy()**. This will copy those inner lists as well.

## Dictionaries and structuring data

Dictionaries are a data type which provides a flexible way to access and organize data.

Unlike indexes for lists, which are only integers, indexes for dictionaries can use many different data types.

Indexes for dictionaries are called **keys**, and a key with its associated value is called a **key-value** pair. 

Dictionaries are typed with braces {}.

```python
myCat = {'size': 'fat', 'color': 'gray', 'disposition': 'loud'}
```
The dictionary's keys are 'size', 'color' and 'disposition'. The values for these keys are 'fat',  'gray' and 'loud'. We can access these values through their keys:

```python
mycat['size']
'fat'
```

### Dictionaries vs. Lists

Dictionaries are unordered. There is no "first" item in a dictionary. Unlike lists, two dictionaries don't need to have the same order to be considered the same.

```python
eggs = {'name': 'Zophie', 'species': 'cat', 'age': '8'}
ham = {'species': 'cat', 'age': '8', 'name': 'Zophie'}
eggs == ham
True
```

Dictionaries can't be sliced like lists. Trying to access a key that does not exist in a dictionary will result in a ```KeyError``` error message.

One example use case for a dictionary would be storing data about your friends' birthdays.

We could use a dictionary with the names as keys and the birthdays as values.

### Methods

There are three dictionary methods that will return list-like values of the dictionary's keys, values or both.

* keys()
* values()
* items()

These returned values are not true lists, they cannot be modified and don't have an append method. But they can be used in for loops.

```python
spam = {'color': 'red', 'age': 42}

for v in spam.values():
  print(v)

  red
  42
```
items() returns tuples of the key and value.

```python
('color', 'red')
```

If we want a true list from one of these methods, we can pass its list-like return value to the list() function:

```python
spam = {'color': 'red', 'age': 42}
spam.keys()
dict_keys(['color', 'age']  #dict_keys value

list(spam.keys()
['color', 'age']  #actual list
```

We can use both values of items() in a loop like this:

```python
for k,v in spam.items():
  #do something
```

#### Checking whether a key or a value exists in a dictionary

```python
spam = {'name': 'Zophie', 'age': 7}

'name' in spam.keys()
True

'Zophie' in spam.values()
True
```

If we want to check whether a value is a key in the dictionary, we can simply use the ```in``` keyword with the dictionary value itself.

```python
'color' in spam
False
```

#### The get() Method

The get() method takes two arguments: the key of the value to retrieve and a fallback value to return if that key does not exist:

```python
picnicItems = {'apples': 5, 'cups': 2}

picnicItems.get{'cups', 0}
returns 2

picnicItems.get('eggs', 0)
returns 0 #key doesn't exist, fallback value has been used
```

#### The setdefault() Method

The first argument that is passed to the method is the key to check for, and the second argument is the value to set at that key if the key does not exist.

If the key does exist, the setdefault method returns the key's value.

```python
spam = {'name': 'Pooka', 'age': 5}
spam.setdefault('color', 'black')
'black' #this is returned because the color key doesn't exist yet

spam
{'color': 'black', 'age': 5, 'name': 'Pooka'}

spam.setdefault('color', 'white')
'black' #returns black because the key already exists, the dictionary is not changed.
```

The setdefault() method is a nice way to ensure that a key exists.

### Pretty printing

If we import the ```pprint``` module in our program, we will have access to the ```pprint() & pformat()``` functions that will allow us to get a cleaner display of the items in a dictionary than what ```print()``` provides. The output looks much cleaner, with the keys sorted. This is especially helpful when the dictionary itself contains nested lists or dictionaries.

The ```pformat()``` is useful if we want to get the string value of the "pretty-fied" text instead of displaying it on the screen.

### Nested dictionaries and lists

Lists are useful to store an ordered series of values. Dictionaries are useful for associating keys with values. Here is an example nested dictionary that contains several guests and what (and how much of it) each guest brought:

```python
guests = {
'Alice': {'Apples': 2, 'sandwiches': 4},
'Bob': {'Toast': 1, 'Apples': 5}
}
```

It is a dictionary that contains another dictionary.

Dictionaries are useful because you can map one item (the key) to another (the value), as opposed to lists, which simply contain a series of values in order. Instead of an integer index, dictionaries can have keys of a variety of data types: integers, floats, strings, or tuples.

## Manipulating strings

### String Literals

Typing string values is pretty straightforward: They begin and end with a single quote.  But what if we wanted to use a single quote inside our string?

#### Double quotes

One way to do it is to use double quotes instead of the single quotes. A benefit of doing that is that the string now can have a single quote in it.

```python
spam = "That is Alice's cat"
```

However, if we want to use both double quotes and single quotes, we need to use **escape characters**

#### Escape characters

An escape character lets us use characters that are otherwise impossible to use in a string. It consists of a \ followed by the character we want to use.

```python
spam = 'Say hi to Bob\'s mother.'
```
**List of escape characters**

* \\' Single quote
* \\" Double quote
* \\t Tab
* \\n Newline (line break)
* \\\ Backslash

#### Raw strings

A raw string completely ignores all escape characters and prints any backslash that appears in the string. To create a raw string, we place an "r" before the beginning quotation mark of a string.

```python
print(r'That is Carol\'s cat.')

#This prints "That is Carol\'s cat."
```

Python doesn't consider the backslash as a escape character.

#### Multiline strings

We can use the ```\n``` character to put a newline into a string. However, it is often easier to simply use multiline strings.

They begin with three single quotes or three double quotes. Any qoutes, tabs or newlines in between the triple qoutes are considered part of the string. Python's indentation rules for blocks do not apply inside a multiline string.

```python
print('''This string
is going over multiple
lines and it works. Even single quotes like this ' work.
''')
```
The single quote, for example, does not need to be escaped.

#### Multiline comments

The # character marks the beginning of a comment for the rest of the line.

If we want to write a comment that spans over multiple lines, a multiline string is often used.

```python
"""
This is a comment
that spans
over multiple lines
"""

print('Hello') #and this is normal code
```

### Indexing and slicing strings

We can use indexes and slices on strings the same way as on lists.

```python
spam = 'Hello World'

spam[0] #returns 'H'
spam[-1] # returns '!'
spam[6:] # returns 'world!'
```

This does not modify the original string. It is useful for storing parts of strings in for example a separate variable.

#### The in and not operators

```python
'Hello' in 'Hello World'
#returns true

'HELLO' in 'Hello World'
#returns false

'' in 'spam'
#returns true
```

### Useful string methods

#### upper(), lower(), isupper() & islower()

When applied to a variable holding a string, the upper()/lower() methods return a string with all uppercase or lowercase letters. They do not change the original string, to change it, we have to set the variable specifically.

```python
spam = 'hello'
spam = spam.toupper()

#spam now returns 'HELLO'
```

This is useful if we want to make case-insensitive comparisons.

The ```isupper()``` and ```islower()``` return true if the string has at least one letter and all of its letters are uppercase/lowercase.

```python
spam = 'Test'
spam.islower()  #returns false

spam = 'test'
spam.islower() #returns true

spam = '12345'
spam.isupper()  #returns false, no letters
```

#### isX String methods

Several other string method's that check whether a string matches a certain condition:

* ```isalpha()``` returns true if a string consists only of letters and is not blank.
* ```isalnum()``` returns true if a string consists only of letters and  numbers and is not blank.
* ```isdecimal()``` returns true if a string consists only of numeric characters and is not blank.
* ```isspace()``` returns true if a string consists only of spaces, tabs and newlines and is not blank.
* ```istitle()``` returns true if a string consists only of words that begin with an uppercase letter followed by only lowercase letters.

These methods are helpful when we need to validate user input, for example.

#### startswith() and endswith()

These two methods return true if the string starts/ends with the string passed into the method.

```python
'Hello world!.startswith('Hello')

#returns True
```

#### join() and split()

The join() method is called on a string, takes a list of string as arguments and returns a string. The returned string is the concatenation of each string in the passed list.

The string on which it is called on is inserted between each string in the list argument.

```python
', '.join(['cats', 'rats', 'bats'])

#returns 'cats, rats, bats'
```

The split() method does the opposite. It's called on a string value and returns a list of string. By default, the string is split wherever whitespace characters (space, tab or newline) appear.

```python
'Hi hello goodbye'.split()

# returns ['Hi', 'hello', 'goodbye']
```

However, we can pass a specific string on which the string should be split.

```python
'MyABCnameABCisABCSimon'.split('ABC')
#returns ['My', 'name', 'is', 'Simon']
'My name is Simon'.split('m')
#returns ['My na', 'e is Si', 'on']
```

A common use of split() is to split a multiline string along the newline characters ('\n').

#### Justifying text with rjust(), ljust() and center()

These methods return a padded version of the string they are called on with spaces inserted to justify the text. The first argument is an integer length for the justified string.

```python
'Hello'.rjust(10)

#returns '    Hello'
#total string length is 10
```

An optional second argument specifies the fill character.

```'Hello'.rjust(20, '*')``` will return a 20 character long string that starts with '*' characters.

The center() method does the same as ljust() or rjust() - but it centers the string.

Using these methods lets us ensure that stirngs are neatly aligned, even if we don't know how many characters long the strings are.

#### Removing whitespace with strip(), rstrip() and lstrip()

The strip() method will return a string without any whitespace characters at the beginning or end. The lstrip() or rstrip() only remove the whitespace on one end.

```python
spam = '        Hello World       '
spam.strip()
'Hello World'
spam.lstrip()
'Hello World        '
spam.rstrip()
'        Hello World'
```

Optionally, we can pass a string argument to specify which characters on the ends should be stripped.

```python
spam = 'SpamSpamBaconSpamEggsSpamSpam'
spam.strip('ampS')
#returns 'BaconSpamEggs'
```

#### Copying and pasting strings with the pyperclip module

```python
import pyperclip
pyperclip.copy('Hello world!')
pyperclip.paste()
#pastes 'Hello world!'
```

If something outside our program changes the clipboard contents, the paste() function will return it.

## Automating tasks

### Pattern matching with regular expressions

Regular expressions allow us to specify a *pattern* of text to seach for. Regular expressions, called *regexes* for short, are descriptions for a pattern of text.

For example, a '\d' in a regex stands for a digit character -  a single numeral from 0 to 9. The regex ```\d\d\d-\d\d\d-\d\d\d\d``` would match a string of three numbers, a hyphen, another three numbers, another hyphen, and  four numbers.

We can make this expression even shorter: Adding a 3 in curly brackets after a pattern is like saying "Match this pattern three times".

```\d{3}-\d{3}-\d{3}``` would do the same as the above example.

#### Creating Regex Objects

All the regex functions in Python are in the ```re``` module. This means we need to ```import re``` to use them.

Passing a string value representing our regular expression to ```re.compile()``` returns a Regex pattern object (Regex object).

```python
phoneNumRegex = re.compile(r'\d\d\d-\d\d\d-\d\d\d\d')

#Here we are using a raw string with 'r' in order to ignore possible escape characters like \n. This makes it easier to type the regular expression.
```

#### Matching Regex objects

The regex object's ```search()``` method searches the string it is passed for any matches to the regex. It returns ```None``` if the regex pattern is not found in the string. If it is found, it returns a ```Match``` object. These objects have a ```group()``` method that will return the actual matched text from the searched string.

```python
 phoneNumRegex = re.compile(r'\d\d\d-\d\d\d-\d\d\d\d')
 mo = phoneNumRegex.search('My number is 415-555-4242.')
print('Phone number found: ' + mo.group())
#Phone number found: 415-555-4242
```

A good online tester for regular expressions is [Regex Pal](https://regexpal.com).

#### Grouping with parentheses

Adding parentheses will create *groups* in the regex: (\d\d\d)-(\d\d\d-\d\d\d\d).

We can then use the ```group()``` match object method to grab the matching text from must one group.

```python
phoneNumRegex = re.compile(r'(\d\d\d)-(\d\d\d-\d\d\d\d)')
mo = phoneNumRegex.search('My number is 415-555-4242.')

mo.group(1)
# returns '415'
```

To retrieve all the groups at once, we can use the ```groups()``` method:

```python
mo.groups()
# returns ('415', '555-4242')
``` 
This returns a tuple of multiple values.

If we need to actually match a parenthesis in our text, we need to escape the ( and ) characters with a backslash.

#### Matching multiple groups with the pipe

When we want to match multiple expressions, we can use the pipe character '|'.

For example: ```r'Batman|Tina Fey'``` will match both 'Batman' or 'Tina Fey'. When both occur in the searched string, the first occurance of matching text will be returned as the Match object.

When we want to match one of several patterns, the pipe is also useful. Let's say we want to match any of the strings 'Batman', 'Batmobile', 'Batcopter' and 'Batbat'.

We can do this:

```python
batRegex = re.compile(r'Bat(man|mobile|copter|bat)')
```

If we would search for the string 'Batmobile lost a wheel' ```mo.group()``` would return the whole text it found -> 'Batmobile', ```mo.group(1)``` would return just the text inside the first parentheses group -> 'mobile'.

This way we can specify several alternative patterns that we would like our regex to match.  If we need to match an actual pipe character, we would need to escape it with a backslash '\|'.