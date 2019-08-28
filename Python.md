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