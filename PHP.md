---
layout: page
title: PHP & SQL
permalink: /php/
toc: true
---

**Table of contents**

* Un-numbered table of contents
{:toc}

# PHP

YouTube Tutorial: [Full Course](https://www.youtube.com/watch?v=OK_JCtrrv-c)

Tutorial: [https://www.php-einfach.de/php-tutorial/erste-schritte/](https://www.php-einfach.de/php-tutorial/erste-schritte/)

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

# SQL

Let's say we have a table for parents called "personen" and a table for children called "kinder".

Creating the table for the parents:

```sql
CREATE TABLE personen
(pnr INTEGER NOT NULL,
 zuname VARCHAR(100),
 vorname VARCHAR(100),
 gehalt INTEGER,
 geschlecht VARCHAR(10),
PRIMARY KEY(pnr));
```

Auto increment for the "pnr" column was set separately with pyhpmyadmin. Structure -> Action -> Change -> checkbox A_I

So when we insert an entry into the database we don't have to specify it manually.

```sql
INSERT INTO `personen` (`pnr`, `zuname`, `vorname`, `gehalt`, `geschlecht`) VALUES (NULL, 'Huber', 'Klaus', '900', '\'m\'');
```

Then we create a second table for the children. We want to connect the "pnr" of the kinder table to the "pnr" column of the personen table. We add a foreign key to the "kinder" table.

Adding foreign key for different table:

```sql
ALTER TABLE `kinder` ADD FOREIGN KEY (`pnr`) REFERENCES `personen`(`pnr`) ON DELETE RESTRICT ON UPDATE RESTRICT;
```

With GUI -> Structure -> Relation View, choosing the "pnr" column from the "personen" table.

Then the two tables are connected by this column.


Examples:

Getting all entries in the personen table that have children and sort them by the personal number (distinct prevents multiple entries with the same "pnr"):

```sql
SELECT DISTINCT p.* FROM personen p INNER JOIN kinder k ON k.pnr = p.pnr ORDER BY p.pnr
```

Getting the full name of the person that earns the most (multiple results possible):

```sql
SELECT zuname, vorname FROM personen p WHERE p.gehalt = (SELECT MAX(gehalt) FROM personen)
```

Getting everyone that earns more than average:

```sql
SELECT * FROM personen p WHERE p.gehalt > (SELECT AVG(gehalt) FROM personen)
```

Getting the names of all people that have children (an entry in the children table with the same "pnr", DISTINCT is used so that parents that have multiple children - so multiple entries with the same pnr in the children table - only appear once):

```sql
SELECT DISTINCT p.vorname, p.zuname FROM personen p INNER JOIN kinder k ON k.pnr = p.pnr
```


Another example:

Creating a database:

```sql
CREATE database lap;
```

Creating a table:

```sql
use lap;

CREATE TABLE testtable(id INTEGER NOT NULL, column1 VARCHAR(100), column2 VARCHAR(100), PRIMARY KEY (id));
```

Show the structure of the table:

```sql
describe testtable;

+---------+--------------+------+-----+---------+-------+
| Field   | Type         | Null | Key | Default | Extra |
+---------+--------------+------+-----+---------+-------+
| id      | int(11)      | NO   | PRI | NULL    |       |
| column1 | varchar(100) | YES  |     | NULL    |       |
| column2 | varchar(100) | YES  |     | NULL    |       |
+---------+--------------+------+-----+---------+-------+
```

Making the "id" column auto increment itself so it doesn't have to be specified:

```sql
ALTER TABLE `testtable` CHANGE `id` `id` INT(11) NOT NULL AUTO_INCREMENT;
```

Inserting a value into the table:

```sql
INSERT INTO testtable(column1, column2) VALUES ("test", "haha");

#returns
+----+---------+---------+
| id | column1 | column2 |
+----+---------+---------+
|  1 | test    | haha    |
+----+---------+---------+
```

