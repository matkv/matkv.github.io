---
layout: default
title: PHP & SQL 
has_children: true
permalink: /phpsql/
nav_order: 8
---

# PHP & SQL

YouTube Tutorial: [Full Course](https://www.youtube.com/watch?v=OK_JCtrrv-c)

Tutorial: [https://www.php-einfach.de/php-tutorial/erste-schritte/](https://www.php-einfach.de/php-tutorial/erste-schritte/)


## Practise repository

[https://github.com/matkv/PHP](https://github.com/matkv/PHP)

Login: mysql -u root -p


## Difference LEFT JOIN und INNER JOIN

LEFT JOIN -> to combine two tables, get values from both with a matching condition, if condition is not true, the table on the right will have NULL values

```sql
SELECT p.vorname, p.zuname, k.vorname, k.gebjahr FROM personen p LEFT JOIN kinder k ON k.pnr = p.pnr
```

Possible result:

```
Markus Maier Martin 1999

Ulrike Maier NULL NULL
```

INNER JOIN -> selects records that have matching values in **both** tables

```sql
SELECT p.vorname, p.zuname, k.vorname, k.gebjahr FROM personen p INNER JOIN kinder k ON k.pnr = p.pnr
```

Possible result:

```
Markus Maier Martin 1999

Silvia Bauer Olivia 1982
```

Ulrike mayer is **not** shown anymore becuase her "pnr" doesn't have a matching value in the other table.