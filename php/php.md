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

## Comparison operators

| Operator | Name                             |
|:---------|:---------------------------------|
| ==       | equal - both have the same value |
| ===      | same value and same type         |
| !=       | not the same value               |
| <        | smaller                          |
| <=       | smaller or equal                 |
| >        | bigger                           |
| >=       | bigger or equal                  |


These can be used, for example, in if clauses or loops. The result of a comparison is always **true** or **false**. This result can be saved in a variable and retrieved using the ```var_dump($variable)```.

```php
//Abspeicherung des Vergleichs in einer Variable
$tier = "Katze";
$string_vergleich = ($tier == "Katze");

echo 'Der Wert der Variable $string_vergleich ist: ';
var_dump($string_vergleich); //Ausgabe welchen Wert die Variable hat

if($string_vergleich) {
   echo " --- Der String Vergleich hatte den true Wert --";
}
?>
```

When checking  if two values are equal ```==``` just checks the value, ``` ===``` check for both the value and the type.

```php
<?php
$integer = 1;
$string = "1";

echo "Ergebnis von ==: ";
var_dump($integer == $string);

echo "<br /> Ergebnis von ===: ";
var_dump($integer === $string);
?>
```

The first var_dump would return ```true```, the second would return ```false```.

The same rules count for ```!=``` and ```!==```.

Another example:

This searches for the position of a word in a sentence. If the word isn't found - ```strpos``` returns 0. But in this example, if the word is found, the position 0 would be returned. 

This would result in a false negative.

In order to fix this, we use ```===``` instead:

```php
<?php
$text = "Dies ist ein Text";
$suchwort = "Dies";

$position = strpos($text, $suchwort);

if($position === false) {
   echo "Dein Suchwort wurde im Text nicht gefunden";
} else {
   echo "Dein Suchwort wurde an Position $position gefunden";
}
?>
```

## Logical operators

```&&``` both conditions need to be true

```||``` only one condition needs to be true

```!``` to negate a condition

```( )``` to group conditions

### AND & OR operators

```php
<?php 
$username = "Nils"; 
$passwort = "php-einfach"; 
if($username == "Nils" AND $passwort == "php-einfach") { 
   echo "Beide Bedingungen waren erfüllt - Zugriff erlaubt. <br />"; 
} 

if($username == "Nils" OR $passwort == "php-einfach") {
  echo "Eine oder beide Bedingungen waren erfüllt.";
}
?>
```

### Grouping conditions

We can group conditions with brackets:

```php
if( ($username == "Nils" AND $passwort == "php-einfach") OR ($username == "Paul" AND $passwort == "geheim") ) {
  echo "Benutzername und Passwort passten zusammen. <br />";
}
```

### Negating conditions

```php
<?php
if( !($zahl >= 10 AND $zahl <= 20) ) {
   echo "Die Zahl war NICHT zwischen 10 und 20 <br />";
}
?>
```

## While loops

```php
<?php
while(Bedingung) {
   Anweisungen
}
?>

<?php
$i = 0;
while($i < 10) {
   echo "$i, ";
   $i++;
}
?>
```

We can stop a while loop with the ```break``` statement.

```php
<?php
$max = 30;
$zaehler = 0;
$increment = 2;

while($zaehler < $max) {
   if($zaehler == 10) {
      echo "Bei der Zahl 10 hören wir auf";
      break;
   }
   echo "$zaehler , ";
   $zaehler += $increment; //Erhöht den $zaehler um den Wert $increment
}
?>
```

The ```continue``` statement doesn't stop the whole while loop, just the **current** iteration. It starts the while loop again from the beginning.

## do-while loop

This loop happens at least once. The condition is checked at the end of the loop, so the code inside it happens at least once before it is cancelled.

```php
<?php
do {
   $zufall = rand(0, 30);
} while($zufall > 10 AND $zufall < 20);

echo "Unsere Zufallszahl: $zufall";
?>
```

## For loop

```php
<?php
for($i=0; $i < 10; $i++) {
   echo "$i, ";
}
?>
```

The for loop also has the ```break``` and ```continue``` keywords.

The while loop is more commmonly used when we don't know how many iterations we will have, the for-loop is used often when we are incrementing/counting values.

## Arrays

An array is an ordered list. It can hold values of different types.

```php
<?php
$wochentage = array("Sonntag","Montag","Dienstag",
"Mittwoch","Donnerstag","Freitag","Samstag");
echo $wochentage[1];
?>
```

This would return "Montag".

### Associative arrays

If we don't want to use numbers to access the values of an array, we can create an **associative array**. We can specify a key for a value, and use it to access the value.

```php
<?php
$wochentage = array(
"so" => "Sonntag",
"mo" => "Montag",
"di" => "Dienstag",
"mi" => "Mittwoch",
"do" => "Donnerstag",
"fr" => "Freitag",
"sa" => "Samstag");

echo $wochentage["mo"];
?>
```

This would return "Montag".

They can also be used to set values:

```php
<?php
$wochentage["mo"] = "Monday";
echo $wochentage["mo"];
?>
```