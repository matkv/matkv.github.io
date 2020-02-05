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