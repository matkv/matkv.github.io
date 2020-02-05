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

Stopped at "Sichtbarkeit in OOP" https://www.php-einfach.de/experte/objektorientierte-programmierung-oop/sichtbarkeit-in-oop/