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
