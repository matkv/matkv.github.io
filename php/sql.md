---
layout: default
title: SQL
parent: PHP & SQL
nav_order: 3
---

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

# SQL PHP Tutorial

```sql
CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `passwort` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `vorname` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `nachname` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`), UNIQUE (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
```

unsigned -> only positive values possible

unique -> this makes sure that the email column can't have duplicate values.

DEFAULT CURRENT_TIMESTAMP -> when creating a new record, the current time will be entered by default

Most important types:

* tinyint - -128 to 127 (useful for saving boolean values true/false)
* int
* double
* varchar - text (up to 65 000 characters)
* text - text, 65 000, no need to specify the length
* longtext - up until 16 billion characters
* blob - binary large object, saving binary data
* date - in the format YYYY-MM-DD
* time - in the format HH:MM:SS
* datetime/timestamp - 'YYY-MM-DD HH:MM:SS' 

We can specify the length and a default value (for timestamp or datetime columns we can for example set the CURRENT_TIMESTAMP as the default value),

For our "id" column we usually want to set the index as "primary".

A_I -> auto increment

## Accessing a MySQL database

There are two main ways to access a mysql database

* MySQLi (MySQL Improved Extension)
* PDO (PHP Data Objects)

PDO is newer, but the differences aren't huge.

### Connecting to the database

```php
<?php
$pdo = new PDO('mysql:host=localhost;dbname=test', 'username', 'password');
?>
```

Usually we want to use the "UTF-8" charset. We can manually specify it:

```php
<?php
$pdo = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'username', 'password');
?>
```

### SQL statements

We can sort results using ```ORDER BY```

```php
$sql = "SELECT * FROM users ORDER BY vorname, nachname";
```

We can limit the results using ```LIMIT```

```php
$sql = "SELECT * FROM users ORDER BY vorname LIMIT 5, 3";
```

This example uses an offset additionally, so we skip the first 5 results, and then show 3.

We can filter our results using the ```WHERE``` keyword:

```php
$sql = "SELECT * FROM users WHERE id = 1";
```

We can use ```AND``` and ```OR``` to further specify the results we want:

```php
$sql = "SELECT * FROM users WHERE (vorname = 'Max' AND nachname = 'Mustermann') OR (email = 'info@php-einfach.de)"; 
```

More examples:

* ```WHERE id < 5```
* ```WHERE id >= 7```
* ```WHERE id IN (2,3,5,7)```
* ```WHERE id NOT IN (4,6,8)```
* ```WHERE last_order IS NULL```
* ```WHERE last_order IS NOT NULL```


Adding a ```%``` - the wildcard character, stands for a any amount of characters:

```php 
$sql = "SELECT * FROM users WHERE vorname LIKE 'Ma%'";
```

This gets all the entries where the "vorname" starts with "Ma" + any amount of additional characters.

An example of a simple search for the database:

```php
$sql = "SELECT * FROM tabelle WHERE spalte LIKE '%Suchwort%'"; 
```

In order to prevent duplicate results, we can use the ```DISTINCT``` keyword:

```php
$sql = "SELECT DISTINCT vorname FROM users ORDER BY vorname";
```

## Prepared statements

In order to avoid SQL Injections, we use prepared statements whenever we work with inputs from the user.

Let's say we have an sql statement that gets a user with a specific id & and we get that id with a $_GET request.

```php
$sql = "SELECT * FROM users WHERE id = $id";
```

If the user adds "seite.php?id=1 OR id > 1" to the end of the URL, we would actually get **all** the users, not just the ones with a specific id.

In order to prevent that, we use **prepared statements**.

```php
<?php
$pdo = new PDO('mysql:host=localhost;dbname=test', 'username', 'password');

if(isset($_GET['id'])) {
   $id = $_GET['id'];
} else {
   die("Bitte eine ?id übergeben");
} 

echo "User mit der ID $id: <br>";
$statement = $pdo->prepare("SELECT * FROM users WHERE id = ?");
$statement->execute(array($id));   
while($row = $statement->fetch()) {
   echo $row['vorname']." ".$row['nachname']."<br />";
   echo "E-Mail: ".$row['email']."<br /><br />";
}
?>
```

The "?" stands for the value that we want to receive from the user.

Let's try the same example as earlier: the database would now check in advance if there is an entry with the id "1 OR id > 1" - this is not the case so we wouldn't show all results by mistake.

### Named parameters

Apart from using the "?" to get anonymous parameters, we can use **named parameters**. We use a colon followed by the name.

This is useful if we have multiple parameters in one SQL query.

```php
<?php
$pdo = new PDO('mysql:host=localhost;dbname=test', 'username', 'password');

$vorname = "Max";
$nachname = "Mustermann";
$email = "info@php-einfach.de";

$statement = $pdo->prepare("SELECT * FROM users WHERE vorname = :vorname OR nachname = :nachname OR email = :email");
$statement->execute(array('vorname' => $vorname, 'nachname' => $nachname, 'email' => $email));   
while($row = $statement->fetch()) {
   echo $row['vorname']." ".$row['nachname']."<br />";
   echo "E-Mail: ".$row['email']."<br /><br />";
}
?>
```

Another example. Here we have to turn of emulated statements of PDO, because unlike the actual prepared statements of MySQL, the emulated statements of PDO don't distinguish between a number or a string for the parameter?


```php
<?php
$pdo = new PDO('mysql:host=localhost;dbname=test', 'username', 'password');
$pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

$statement = $pdo->prepare("SELECT * FROM users LIMIT :limit");
$statement->execute(array('limit' => 5));   
while($row = $statement->fetch()) {
   echo $row['vorname']." ".$row['nachname']."<br />";
   echo "E-Mail: ".$row['email']."<br /><br />";
}
?>
```

## Inserting values

```php
<?php
$pdo = new PDO('mysql:host=localhost;dbname=test', 'username', 'password');
 
$statement = $pdo->prepare("INSERT INTO tabelle (spalte1, spalte2, splate3) VALUES (?, ?, ?)");
$statement->execute(array('wert1', 'wert2', 'wert3'));   
?>
```

Actual example with values:

```php
<?php
$pdo = new PDO('mysql:host=localhost;dbname=test', 'username', 'password');
 
$statement = $pdo->prepare("INSERT INTO users (email, vorname, nachname) VALUES (?, ?, ?)");
$statement->execute(array('info@php-einfach.de', 'Klaus', 'Neumann'));   
?>
```

```php
<?php
$pdo = new PDO('mysql:host=localhost;dbname=test', 'username', 'password');
$neuer_user = array();
$neuer_user['email'] = 'info@php-einfach.de';
$neuer_user['vorname'] = 'Klaus';
$neuer_user['nachname'] = 'Neumann';
$neuer_user['weiteres_feld'] = 'Dieses wird beim Eintragen ignoriert';
 
$statement = $pdo->prepare("INSERT INTO users (email, vorname, nachname) VALUES (:email, :vorname, :nachname)");
$statement->execute($neuer_user);   
?>
```

Inserting multiple rows at once:

```php
<?php
$pdo = new PDO('mysql:host=localhost;dbname=test', 'username', 'password');
 
$statement = $pdo->prepare("INSERT INTO users (email, vorname, nachname) VALUES (:email, :vorname, :nachname)");
 
for($i=0;$i<10; $i++) {
   $neuer_user = array('email' => 'email'.$i, 'vorname' => 'Vorname'.$i, 'nachname' => 'Nachname'.$i)
   $statement->execute($neuer_user);   
}
?>
```

This would create users with names from "Vorname0" to "Vorname9".


Usually we always have a column with the id, which is auto incremented.

In order to get the newest id, we can use the ```$pdo->lastInsertId()``` function:

```php
$neue_id = $pdo->lastInsertId();
echo "Neuer Nutzer mit id $neue_id angelegt";
```

## Updating values

Updating a single row:

```php
<?php
$pdo = new PDO('mysql:host=localhost;dbname=test', 'username', 'password');
 
$statement = $pdo->prepare("UPDATE users SET email = ? WHERE id = ?");
$statement->execute(array('neu@php-einfach.de', 1));
?>
```

We can also use named parameters:

```php
<?php
$pdo = new PDO('mysql:host=localhost;dbname=test', 'username', 'password');
 
$statement = $pdo->prepare("UPDATE users SET email = :email_neu WHERE id = :id");
$statement->execute(array('id' => 1, 'email_neu' => 'neu@php-einfach.de'));
?>
```

Let's say we always want to change the entry with the id "1"

```php
<?php
$pdo = new PDO('mysql:host=localhost;dbname=test', 'username', 'password');
 
$statement = $pdo->prepare("UPDATE users SET email = :email_neu WHERE id = 1");
$statement->execute(array('email_neu' => 'neu@php-einfach.de'));
?>
```

This would update the email of **all** users:

```php
<?php
$pdo = new PDO('mysql:host=localhost;dbname=test', 'username', 'password');
 
$statement = $pdo->prepare("UPDATE users SET email = :email_neu");
$statement->execute(array('email_neu' => 'neu@php-einfach.de'));
?>
```

Updating the email of all users named "Max":

```php
<?php
$pdo = new PDO('mysql:host=localhost;dbname=test', 'username', 'password');
 
$statement = $pdo->prepare("UPDATE users SET email = :email_neu WHERE vorname = :vorname");
$statement->execute(array('email_neu' => 'neu@php-einfach.de', 'vorname' => 'Max'));
?>
```

### Updating multiple fields

```php
<?php
$pdo = new PDO('mysql:host=localhost;dbname=test', 'username', 'password');
 
$statement = $pdo->prepare("UPDATE users SET vorname = :vorname_neu, email = :email_neu, nachname = :nachname_neu WHERE id = :id");
$statement->execute(array('id' => 1, 'email_neu' => 'neu@php-einfach.de', 'vorname_neu' => 'Neuer Vorname', 'nachname_neu' => 'Neuer Nachname'));
?>
```

### Updating fields with values of other fields

```php
<?php
$pdo = new PDO('mysql:host=localhost;dbname=test', 'username', 'password');
 
$statement = $pdo->prepare("UPDATE users SET vorname = nachname WHERE id = :id");
$statement->execute(array('id' => 1));
?>
```

Here we set the value of "vorname" to the value of "nachname".

Another example: incrementing the amount of logins:

```php
<?php
$pdo = new PDO('mysql:host=localhost;dbname=test', 'username', 'password');
 
$statement = $pdo->prepare("UPDATE users SET anzahl_logins = anzahl_logins+1 WHERE id = :id");
$statement->execute(array('id' => 1));
?>
```

## Deleting values

```php
<?php
$pdo = new PDO('mysql:host=localhost;dbname=test', 'username', 'password');
 
$statement = $pdo->prepare("DELETE FROM tabelle WHERE spalte = ?");
$statement->execute(array('Wert für Spalte'));
?>
```

We can also use where clauses and multiple conditions:

```php
<?php
$pdo = new PDO('mysql:host=localhost;dbname=test', 'username', 'password');
 
$statement = $pdo->prepare("DELETE FROM users WHERE vorname = :vorname AND nachname = :nachname");
$statement->execute(array('vorname' => 'Max', 'nachname' => 'Mustermann')); //Löscht Benutzer mit Namen Max Mustermann
?>
```

## Counting entries

To count entries we can use ```rowCount()```

```php
<?php
$pdo = new PDO('mysql:host=localhost;dbname=test', 'username', 'password');
  
$statement = $pdo->prepare("SELECT * FROM users WHERE vorname = ?");
$statement->execute(array('Max')); 
$anzahl_user = $statement->rowCount();
echo "Es wurden $anzahl_user Benutzer gefunden";
?>
```

This also works with UPDATE and DELETE commands.

We should only use this PDO ```rowCount()``` method if we want to actually output the data - else all the data is sent to PHP and then it is counted. For performance reasons we should instead use the SQL command ```COUNT()``` because in that case MySQL actually just counts the entries.

```php
<?php
$pdo = new PDO('mysql:host=localhost;dbname=test', 'username', 'password');

$statement = $pdo->prepare("SELECT COUNT(*) AS anzahl FROM users");
$statement->execute();  
$row = $statement->fetch();
echo "Es wurden ".$row['anzahl']." User gefunden";
?>
```

By using **AS**, we **name** the results of the COUNT operation to "anzahl".

### Getting distinct entries

```php
SELECT COUNT(DISTINCT vorname) AS anzahl FROM user
```

### Grouping entries by certain criteria

```php
SELECT nachname, COUNT(*) AS anzahl FROM users GROUP BY nachname
```

```php
<?php
$pdo = new PDO('mysql:host=localhost;dbname=test', 'username', 'password');

$statement = $pdo->prepare("SELECT nachname, COUNT(*) AS anzahl FROM users WHERE vorname = ? GROUP BY nachname");
$statement->execute(array('Max'));  
while($row = $statement->fetch()) {
  echo $row['nachname'].": ".$row['anzahl']." User<br />";
}
?>
```