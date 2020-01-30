---
layout: default
title: PHP
parent: PHP & SQL
nav_order: 1
---

# PHP



Example of using PHP code:


```php
<?php
phpinfo();
?>
```

## Echo command
We can output values with ```echo```:

```php
<p>Dynamic PHP data
<?php
echo date("d.m.Y H:i:s");
?></p>
```

It is also possible to use HTML commands inside the ```echo``` command:

```php
<?php
echo "<b>Hello World</b>";
?>
```

## PHP comments

Comments can be added by either using ```//``` for single line comments or  ``` /* */``` for multiline comments.

## Variables

Variables always start with a dollar sign ```$```, followed by the variable name, equal sign and then a ```;```

And we can use them like this:

```php
<?php
$name = "Nils Reimers";
echo "Mein Name ist $name";
?>
```

We can also overwrite variables. If we want to echo **just** the variable with no additional text, we can leave out the ```" "```.

```php
<?php
$name = "Nils Reimers";
echo $name;
?>
```

To append a variable to another, we can use a dot.

```php
<?php
$name = "Nils ";
$name .= "Reimers";
echo $name;
?>
```

This would output "Nils Reimers". We can also combine multiple variables with some text by using the dots.

```php
<?php
$farbe = "rotes";
$text = "Wir haben ein ".$farbe." Haus";
echo $text;
?>
```

### Types of variables

* Integer
* String
* Float
* Double
* bool

```php
<?php
$integer = 15; //Eine Integer Variable
$string = "Ganz viel Text"; //Ein String
$float = 15.5; //Eine Zahl mit einem Komma
$bool = true;
?>
```

### Working with variables

```php
<?php
$zahl1 = 10;
$zahl2 = 5;
$ergebnis = $zahl1 + $zahl2;
echo "Ergebnis: $ergebnis";
?>

<?php
$zahl = 1;
$ergebnis = $zahl + 5;
echo $ergebnis;
?>
```

Divide with ```/```, multiply with ```*```, power with ```pow(firstnumber, secondnumber)```, square root with ```sqrt(number)```.

Incrementing with ```$variable++```, decrementing with ```$variable--```.

Short way of using those calculations:

```php
<?php
$zahl = 1;
$zahl += 10;
echo $zahl;
?>
```

Using values with commas:

```php
<?php
$zahl1 = 2.5;
$zahl2 = 5.5;
$ergebnis = $zahl1 * $zahl2;
echo "Ergebnis: $ergebnis";
?>
```

## $_GET und $_POST

These two variables can be used to transfer values from one php page to another.

### $_GET

These values are transfered via the **URL**. We can use them like this:

```php
<?php
$vorname = $_GET['vorname'];
$nachname = $_GET['nachname'];
echo "Hallo $vorname $nachname";
?>
```

So if a page asks for ```get.php?vorname=Max&nachname=Meier```, these two variables will be used. They are separated with the ```$``` symbol, the order is not important.

GET variables are usually used to implement dynamic values in links - for example showing a specific article with a unique ID in a webshop.

### $_POST

Unlike GET, POST variables are transfered via a **form**.

On the first page, we can add our form:

```php
<form action="page2.php" method="post">
Vorname: <input type="text" name="vorname" /><br />
Nachname: <input type="text" name="nachname" /><br />
<input type="Submit" value="Absenden" />
</form>
```

And on page2.php, we can use the values that were transfered:
```php
<?php
$vorname = $_POST["vorname"];
$nachname = $_POST["nachname"];
echo "Hallo $vorname $nachname";
?>
```

We request the value with the exact name of the input field on the first page.

GET and POST values can be combined. We could, for example, add a GET variable directly in the form on the first page ```<form action "page2.php?wochentag=Sonntag">```

### Deciding between POST or GET

Whenever we want to use a form, we should use POST. GET restricts the length because the values are added directly in the URL + the values are also seen directly in the URL.

Advantages of GET - it should be used for simple information that should be transfered, such as a selection in a link for, for example, a specific id of an article.

```html
<a href="artikel.php?id=234">Das PHP Einsteiger Buch</a>
```

## If-clauses

```php
<?php
$user = "Klaus";

if($user == "Nils") 
   {
   echo "Hallo Nils";
   } 
else 
   {
   echo "Du bist nicht Nils!";
   }
?>
```

This example would return "Du bist nicht Nils!".

Another example: A form that takes a password + checking if the password is the correct one on the second page.

```html
<form action="seite2.php" method="post">
<input type="Password" name="passwort" />
<input type="Submit" value="Absenden" />
</form>
```

On the second page we check if the password is "geheim":

```php
<?php
$passwort = $_POST["passwort"];
 
if($passwort=="geheim")
   {
   echo "Herzlich Willkommen im internen Bereich";
   }
else
   {
   echo "Das Passwort ist leider falsch";
   }
?>
```

We can also use if clauses inside of other if clauses or inside an else clause:

```php
<?php
$user = "Nils";

if($user=="Nils")
   {
   echo "Hallo Nils";
   }
else
   {
   if($user=="Reimers")
      {
      echo "Hallo Herr Reimers";
      }
   else
      {
      echo "Du bist nicht Nils Reimers";
      }
   }
?>
```

It is also possible to use "else if" - this is only checked if the previous if has not been true:

```php
<?php
$user = "Nils";

if($user=="Nils")
   {
   echo "Hallo Nils";
   }
else if($user == "Reimers")
   {
   echo "Hallo Herr Reimers";
   }
else if($user == "Meier")
   {
   echo "Hallo Herr Meier";
   }
else
   {
   echo "Du bist weder Herr Reimers noch Herr Meier";
   }

?>
```

We can also check if a condition has not been met:

```php
<?php
$user = $_POST["user"];
 
if($user!="")
   {
   echo "Herzlich Willkommen $user";
   }
else
   {
   echo "Das Feld User wurde nicht ausgefüllt";
   }
?>
```