---
layout: page
title: PHP & SQL
permalink: /php/
toc: true
---

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