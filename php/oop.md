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

## Static methods and properties

```Static``` methods or properties are not connected to a specific object, but are **global**.

```php
<?php
class User {
	public $name;
	
	public static $allUsers = array();
	
	public static function numberOfUsers() {
		return count(self::$allUsers);
	}
	
	public static function createNewUser($name) {
		if(strlen($name) < 10) {
			echo "Nur User mit langen Namen sind erlaubt!<br>";
			return null;
		} else {
			$user = new User();
			$user->name = $name;
		
			self::$allUsers[] = $user;
		
			return $user;
		}
	}
}

User::createNewUser("Max Mustermann");
echo "Anzahl Nutzer: ".User::numberOfUsers()."<br>";
User::createNewUser("Lisa Kurz");
echo "Anzahl Nutzer: ".User::numberOfUsers()."<br>";
?>
```

We should use static methods to encapsulate certain functionality - for example:

```php
<?php
class User {
 // Entsprechender Code für eure Benutzerverwaltung
}
 
class Product {
 // Entsprechender Code für eure Produktverwaltung
}
 
//Erstellung neuer Nutzer
User::createNewUser("Max Muster", "max@muster.de", "geheimes passwort");
 
//Finden eines Users
$lisa = User::find("lisa@muster.de");
echo $lisa->email; 
 
//Erzeugen eines Produkts
Product::createNewProduct("Spielekonsole", "19,99 Euro");
 
$playstation = Product::find("Playstation");
echo $playstation->price;
?>
```

## Inheritance

We use the ```extends``` keyword:

```php
<?php
class Oberklasse {
	function HelloWorld() {
		echo "Hello World <br>";	
	}
}

class Unterklasse extends Oberklasse {
	function HelloWorld() {
		parent::HelloWorld();
		echo "Hallo Welt <br>";				
	}
}

class Unterunterklasse extends Unterklasse {
	function HelloWorld() {
		echo "Bonjour monde <br>";	
	}
}

$object = new Unterklasse();
$object->HelloWorld();
?>
```

We use ```parent::functionName()``` to access functions of the parent class.

Another example:

```php
<?php
class Produkt {
	public $titel;
	public $preis;
	
	function gesamtpreis($stueckzahl) {
		$gesamtpreis = $this->preis*$stueckzahl;
		
		if($stueckzahl >= 10) {
			$gesamtpreis = $gesamtpreis*0.8;
		}
		return $gesamtpreis;
	}
}

class Buch extends Produkt {
	public $autor;
}

$buch = new Buch();
$buch->titel = "PHP lernen leicht gemacht";
$buch->preis = 20.00;
$menge = 5;
echo  "$menge Bücher von <i>$buch->titel</i> je $buch->preis Euro  kosten: ".$buch->gesamtpreis($menge)."<br>";

```

We can also overwrite functions in children classes:

```php
<?php
class Produkt {
	public $titel;
	public $preis;
	
	function gesamtpreis($stueckzahl) {
		$gesamtpreis = $this->preis*$stueckzahl*$this->mengenrabatt($stueckzahl);
		return $gesamtpreis;
	}
	
	function mengenrabatt($stueckzahl) {
		return 1;
	}
}

class Buch extends Produkt {
	public $autor;
	
	function mengenrabatt($stueckzahl) {
		if($stueckzahl >= 10) {
			return 0.8; //20% Rabatt
		} else {
			return 1;
		}
	}
}

?>
```

The "deepest" version of the overwritten method will be called.

## Get & Set Methods

Get and set methods let us protect our class variables from access from outside.

```php
<?php
class User {
	protected $email;
	protected $password;
	
	public function getEmail() {
		return $this->email;
	}
	
	public function setEmail($email) {
		$this->email = $email;
	}
}
?>
```

```php
<?php
$user = new User();
$user->setEmail("info@php-einfach.de");
$user->setPassword("geheim");
 
echo "Die E-Mail-Adresse: ".$user->getEmail();
?>
```

The big advantage in using getters and setters is that we can add additional checks to prevent the variable from getting an invalid value.

```php
public function setEmail($email) {
		if(filter_var($email, FILTER_VALIDATE_EMAIL)) { //eine gültige E-Mail-Adresse wurde übergeben 
			$this->email = $email;
			return true;
		}
		return false;
	}
```

By leaving out a set-method, we can make something **read only**.