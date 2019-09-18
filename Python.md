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