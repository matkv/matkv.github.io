---
layout: default
title: Object Oriented PHP
parent: PHP & SQL
nav_order: 3
---

# Object Oriented Programming - PHP

Object oriented programming helps us keep our code maintainable and reusable.

Example of a php class:

```php
<?php
//Definition der Klasse User
class User {
	//Definition der Eigenschaften name, email und password
	public $name;
	public $email;
	public $password;

	//Definition der Methode setEmail
	function setEmail($newEmail) {
		if(filter_var($newEmail, FILTER_VALIDATE_EMAIL) !== false) {
			$this->email = $newEmail;
			return true;
		}
		return false; //Neue E-Mail-Adresse konnte nicht gespeichert werden, da diese ungültig war
	}
}

//Definition von zwei Objekten, Max und Lisa
$max = new User();
$max->name = "Max Mustermann";
$max->setEmail("max@muster.de");

$lisa = new User();
$lisa->name = "Lisa Meier";
$lisa->setEmail("lisa@meier.de");

echo "Max hat die E-Mail $max->email und Lisa die E-Mail $lisa->email";
?>
```

We use the ```new``` keyword to create a new object from the User class.

## References in OOP

In order to access properties of objects in PHP, we use the arrows ```->```.

```php
<?php
class User {
   //...
}
 
$max = new User(); //Neues User-Objekt
$max->name = "Max Mustermann"; //Setzen der Eigenschaft
echo "Hallo $max->name"; //Abruf der Eigenschaft
 
$max->setEmail("max@muster.de"); //Aufruf der Methode setEmail
```

As soon as we want to access a property or method of a class **inside** that class we can use the ```this``` keyword.

## Visibility in OOP

* public - everyone has access
* protected - only the class and inherited classes have access
* private - only the class has access

Generally we want to use ```public```, when we want our property or method to be used outside the class - otherwise we should use ```protected``` or ```private```.

## Methods and constructors

Method: 

```php
public function methode2($paramater, $parameter2) { 

 }
 
```

If no keyword is specified,  ```public``` is used in the background.

To use class methods inside the class, we have to use ```$this->nameOfTheMethod()```.

To use a method of an instance of the class, aka an object, we use ```$nameoftheobject->nameOfTheMethod()```

### __construct() method

```php
<?php
class User {
	public $erstellungsdatum;
	public $name;
	public $email;
	
	public function __construct($name, $email = "") {
		$this->name = $name;
		$this->email = $email;
		$this->erstellungsdatum = date("d.m.Y H:i:s");
	}
}

$max = new User("Max Mustermann", "max@muster.de");
echo "Das Objekt von $max->name wurde erstellt am $max->erstellungsdatum";
?>
```

The ```__construct()``` is called as soon as the object is created. We can use it to, for example, specify properties.

In this example, if we want to create a new ```User``` object, we have to call ```new User("Name");```, or ```new User("Name", "Email");```