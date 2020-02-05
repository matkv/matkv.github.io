---
layout: default
title: PHP
parent: PHP & SQL
nav_order: 1
---

# PHP

* [Object Oriented PHP](https://www.php-einfach.de/experte/objektorientierte-programmierung-oop/)
* [SQL Tutorial](https://www.php-einfach.de/mysql-tutorial/)



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

### Adding more values to an array

We can add more values by using "[]" after the array name:

```php
<?php
$mitarbeiter = array("Bob","Peter");
$mitarbeiter[] = "Lisa";

echo $mitarbeiter[2];
?>
```

This would return "Lisa". This would also work for an empty array.

For associative array, we have to specify the key first:

```php
<?php
$mitarbeiter = array(
   "Bob" => "Bob Meier",
   "Peter" => "Peter Schröder");
$mitarbeiter["Lisa"] = "Lisa Müller";

echo $mitarbeiter["Lisa"];
?>
```

This would return "Lisa Müller".

### Returning & formatting array values with implode()

With the ```implode()``` function, we can combine all elements of an array to a string. We can also specify what should be inserted between each value:

```php
<?php
$namen = array("Paul", "Max", "Hans");

echo "Namen per Komma trennen: <br>";
$namenStr = implode(", ", $namen);
echo $namenStr; 

echo "<br><br>";
echo "Ein Name pro Zeile: <br>";
echo implode("<br>", $namen);
```

This would return:

```
Namen per Komma trennen:
Paul, Max, Hans

Ein Name pro Zeile:
Paul
Max
Hans
```

### Creating an array from a string

We can do the reverse with the ```explode()``` function. We can specify a character & the string will be split at this character and the parts will be added to an array.

```php
<?php
$text = "Paul,Max,Hannes";
$namen = explode(",", $text ); //Konvertierung des Strings in ein Array
echo "<pre>"; var_dump($namen); echo "</pre>"; //Formartierte Ausgabe des Arrays


//Ersetze die 1. Person durch neuen Namen
$namen[1] = "Lisa";

//Verwandel das Array zurück in einen String
$text = implode(", ", $namen);
echo $text;
```

### Multi-dimensional arrays

A multidimensional array is an array that contains other arrays:

```php
<?php
$mitarbeiter = array(
  array("Klaus", "Zabel"),
  array("Arnie", "Meier"),
  array("Willi", "Brand")
);

//Daten ausgeben
echo "Vorname: ".$mitarbeiter[0][0];
echo " Nachname: ".$mitarbeiter[0][1];
?>
```

This would return "Vorname: Klaus Nachname: Zabel".

This also works with associative arrays:

```php
<?php
$mitarbeiter = array();
$mitarbeiter[] = array("Vorname"=>"Klaus",
                       "Nachname"=>"Zabel");

$mitarbeiter[] = array("Vorname"=>"Arnie",
                       "Nachname"=>"Meier");

$mitarbeiter[] = array("Vorname"=>"Willi",
                       "Nachname"=>"Brand");

//Daten ausgeben
echo "Vorname: ".$mitarbeiter[0]["Vorname"];
echo " Nachname: ".$mitarbeiter[0]["Nachname"];
?>
```

### Searching through arrays

By using ```in_array()``` we can check if a value exists in an array:

```php
<?php
$mitarbeiter = array("Bob","Peter","Lisa");
$name = "Bob";
if(in_array($name,$mitarbeiter)) {
   echo "Der Name $name ist in dem Array enthalten";
}
?>
```

It returns ```true``` if the search was successful.

For associative arrays, we use ```array_key_exists()```

```php
<?php
$mitarbeiter = array("Bob" => "Baumeister", "Klaus" => "Muster");
$key = "Bob";

if(array_key_exists($key, $mitarbeiter)) {
  echo "Das Element $key hat den Wert: ".$mitarbeiter[$key];
} else {
  echo "Das Array hat keinen Schlüssel $key";
}
?>
```

### Iterating over all values of an array

The ```count()``` function lets us get the number of elements in an array.

We usually use a **for-loop** for normal arrays and a **foreach-loop** for associative arrays (because we don't have normal indexes anymore):

```php
<?php
$namen = array("Klaus", "Anna", "Dieter");

echo "<br> Durchlaufen des Arrays mittels for-Schleife: ";
for($i=0; $i<count($namen); $i++) {
  echo $namen[$i].", ";
}

echo "<br> Durchlaufen des Arrays mittels foreach-Schleife: ";
foreach($namen AS $name) {
  echo $name.", ";
}
?>
```

### Sorting arrays

By using ```sort()``` we can sort ascending, ```rsort()``` lets us sort descending:

```php
<?php
$namen = array("Klaus", "Dieter", "Anna", "Melissa", "arne");

sort($namen);
echo implode(", ", $namen);
?>
```

This returns: Anna, Dieter, Klaus, Melissa, arne

### Other useful array functions & examples using arrays

```shuffle()``` randomizes the order of the values in an array.

**Getting the last entry of an array**

```php
<?php
$mitarbeiter = array("Bob","Peter");

echo "Letzer Eintrag des Arrays: ".$mitarbeiter[count($mitarbeiter)-1];
?>
```

**Echo-ing all values in an array using a for loop or a while loop**

```php
echo "Ausgabe des Arrays mittels for-Schleife: <br>";
for($i=0; $i < count($mitarbeiter); $i++) {
   echo $mitarbeiter[$i]."<br>";
}

$i = 0;
while($i < count($mitarbeiter)) {
   echo $mitarbeiter[$i]."<br>";
   $i++;
}
```

For an associative array, we would use a **foreach loop**:

```php
<?php
$mitarbeiter = array("Klaus" => "Müller", "Bob" => "Baumeister");

foreach($mitarbeiter AS $vorname => $nachname) {
 echo "$vorname $nachname <br>";
}
?>
```

For **multidimensional arrays** we would have to use nested foreach loop:

```php
foreach($unternehmen AS $abteilung => $mitarbeiter_der_abteilung) {
  echo "Mitarbeiter der Abteilung: $abteilung <br>";
  foreach($mitarbeiter_der_abteilung AS $mitarbeiter) {
    echo "$mitarbeiter <br>";
  }
  echo "<br>";
}
```

**Sorting arrays**

* asort() - sorts a-z (works for associative too)
* arsort() - sorts z-a (works for associative too)
* ksort() - sorts the key a-z
* krsort() - sorts the key z-a
* natsort() -  sorts a-z (natural order)
* natcasesort() - sorts a-z natural order without upper/lowercase
* sort() - sorts a-z (doesn't work for associative)
* sort() - sorts z-a (doesn't work for associative)
* shuffle() - mixes values randomly

```asort()``` and ```arsort()``` maintain the correct association of a value with its key. It is not lost after sorting.

Normal order -> for example: 1, 10, 12, 2, 25

Natural order -> for example: 1, 2, 10, 12, 25

Sorting the keys of an array:

```php
ksort($mitarbeiter);

//Array ausgeben
echo "Ausgabe des Arrays mittels foreach-Schleife: <br>";
foreach($mitarbeiter AS $vorname => $nachname) {
   echo "$vorname $nachname <br>";
}
```

## Reading files

We can read the content of a file using the ```file_get_contents()``` function:

```php
<?php
$zitate = file_get_contents('zitate.txt');
echo $zitate;
?>
```

This however, would return the whole text without any line breaks. In order to convert the line breaks in the file to html line breaks, we use the ```nl2br()``` function:

```php
<?php
$zitate = file_get_contents('zitate.txt');
echo nl2br($zitate);
?>
```

### Reading files line by line

We can use the ```file()``` function to read each line one by one and save each as an array element:

```php
<?php
$zitate = file("zitate.txt");
for($i=0;$i < count($zitate); $i++){
   echo $i.": ".$zitate[$i]."<br><br>";
}
?>
```

If we, for example, wanted to get a random entry in this array, we could use the ```rand()``` function:

```php
<?php
$zitate = file("zitate.txt");
$zitat_nummer = rand(0, count($zitate)-1);
echo $zitate[$zitat_nummer];
?>
```

## Writing files

The ```file_put_contents()``` functions takes a file name as the first argument, and the data that should be written as the second argument.

If the file does not exist yet, it will be created.

```php
<?php
$name = $_GET["name"];
$zeile = "Per GET wurde der Name $name übergeben \r\n";
file_put_contents("beispiel.txt", $zeile);
echo "beispiel.txt wurde überschrieben";
?>
```

Example of reading a file, gettings its value and increasing it by 1, then writing the new value back into file:

```php
<?php
$counter = file_get_contents("counter.txt"); //Einlesen des Wertes
$counter++; //Wert um 1 erhöhen
file_put_contents("counter.txt", $counter); //Abspeichern des Wertes
echo "Diese Datei wurde bereits $counter mal aufgerufen";
?>
```

### Appending to a file

```php
<?php
$name = $_GET["name"];
$zeile = "Per GET wurde der Name $name übergeben \r\n";
file_put_contents("beispiel.txt", $zeile, FILE_APPEND);
echo "beispiel.txt aktualisiert";
?>
```

This doesn't overwrite the file but appends the value to the existing file.

Example of using the ```implode()``` function with the ```file_put_contents()``` function to save values entered in a form:

```php
<?php
$name = $_POST['name'];
$email = $_POST['email'];
$passwort = $_POST['passwort'];
$user_info = array($email, $passwort, $name);
 
if(!empty($name) AND !empty($email) and !empty($passwort)) {
   $eintrag = implode(";", $user_info)."\r\n";
   file_put_contents("users.txt", $eintrag, FILE_APPEND);
   echo "$email wurde erfolgreich registriert";
} else {
   echo "Bitte alle Felder ausfüllen";
}
?>
```

This way, each entry in the users.txt file would look like: ```email;passwort;name```

Let's say we want to check for these usernames and passwords in a login page:

```php
<?php
$email = $_POST["email"];
$passwort = $_POST["passwort"];
 
$users = file("users.txt");
foreach($users AS $line)  {
   $user_info = explode(";", $line);
   if($user_info[0] == $email AND $user_info[1] == $passwort) {
       echo "Hallo ".$user_info[2];
   }
}
?>
```

## Time and date

```php
<?php
$timestamp = time();
echo $timestamp;
?>
```

This returns the UNIX timestamp.

```php
<?php
$timestamp = time();
$datum = date("d.m.Y - H:i", $timestamp);
echo $datum;
?>
```

The ```date()``` function formats the timestamp into a formatted date: 03.02.2020 - 18:25. 

If we don't add a second parameter to the ```date()``` function, it will automatically use the current timestamp.

Getting the duration of the timestamp at 500 seconds - in minutes:

```php
<?php
$timestamp = "500";
echo round($timestamp / 60);
?>
```
This would return 8.

### Getting the weekday

```php
<?php
$tag = date("w");
?>
```

This returns 0 - 7 (starts at 0 for Sunday). 

In order to get the german weekday as a normal string, we'd have to create an array with all weekdays and then choose the value corresponding to the current weekday number.

### Getting the timestamp from a string

The ```strtotime()``` function lets us convert a string to a timestamp:

```php
<?php
echo strtotime("09 October 2015")."<br />";
echo strtotime("09.10.2015")."<br />";
echo strtotime("09.10.2015 14:03:02");
?>
```

### Working with timestamps

Getting the timestamp of the current time + an hour:

```php
<?php
$in_einer_stunde = time() + 60*60;
echo "In einer Stunde ist es: ".date("H:i:s", $in_einer_stunde);
?>
```

We add "60*60" seconds to the current timestamp (60 seconds for each of the 60 minutes).

We can also use the ```strtotime()``` function to work with timestamps:

```php
<?php
echo strtotime("+1 day")."<br />";
echo strtotime("+1 week")."<br />";
echo strtotime("+1 week 2 days 4 hours 2 seconds")."<br />";
echo strtotime("next Thursday")."<br />";
echo strtotime("last Monday")."<br />";
?>
```

```php
<?php
$heute_in_einem_monat = strtotime("+1 month");
echo date("d.m.Y", $heute_in_einem_monat)."<br />";
?>
```

## Sending e-mails with PHP

There is a pre-built php functions that lets servers send e-mails:

```php
<?php
$empfaenger = "empfaenger@domain.de";
$betreff = "Die Mail-Funktion";
$from = "From: Vorname Nachname <absender@domain.de>";
$text = "Hier lernt Ihr, wie man mit PHP Mails verschickt";
 
mail($empfaenger, $betreff, $text, $from);
?>
```

If the e-mail should be a html email we have to add some more info to the $from variable:

```php
<?php
$empfaenger = "empfaenger@domain.de";
$betreff = "Die Mail-Funktion";
$from = "From: Vorname Nachname <absender@domain.de>\r\n";
$from .= "Reply-To: antwort@domain.de\r\n";
$from .= "Content-Type: text/html\r\n";
$text = "Hier lernt Ihr, wie man mit <b>PHP</b> Mails
verschickt";
 
mail($empfaenger, $betreff, $text, $from);
?>
```

## Search and replace

### Search for text

```strpos()``` returns the position of the first appearance of the searched text, or ```false``` if the text has not been found. Is **is** case sensitive (```stripos()``` is insensitive) & also returns true if the word is found inside another word.

```php
<?php
$text = "Dies ist ein kleines Beispiel zum Durchsuchen. Eine andere Möglichkeit lernen wir später.";
$position = strpos($text, "ein");
echo "Gefunden an Position: $position";
?>
```

Another example how we can use this:

```php
<?php
$text = "Dies ist ein kleines Beispiel zum Durchsuchen. Eine andere Möglichkeit lernen wir später.";
$suchwort = "Ich existiere nicht";
$position = strpos($text, $suchwort);

if($position === false) {
   echo "String wurde nicht gefunden";
} else {
   echo "Gefunden an Position: $position";
}
?>
```

(Here we again use "===" because otherwise 0 would be interpreted as false, but 0 can be valid here bc the searched word could be in the first position).

### Return part of a string

With ```substr()``` we can extract just a part of some text.

The three parameters are the text, the starting position, and the length. The length parameter is optional.

```php
<?php
$text = "Dies ist ein kleines Beispiel zum Durchsuchen. Eine andere Möglichkeit lernen wir später.";
echo substr($text, 9, 11); //Ausgabe: ein kleines
?>
```

This would return "ein kleines".

Some more examples:

```php
<?php
$text = "Dies ist ein kleines Beispiel zum Durchsuchen. Eine andere Möglichkeit lernen wir später.";
echo substr($text, 0, 15)."<br />"; //Gibt den Anfang des Textes aus
echo substr($text, 12)."<br />"; //Gibt alles ab dem 12. Zeichen aus
echo substr($text, strlen($text)-15)."<br />"; //Gibt die letzten 15 Zeichen aus
?>
```

Instead of using the length of the string and substracting an amount of it, we can just set the start value as negative - this way we **count from the end of the text**.

If the value of the length is negative, everything until the end of the text is returned.

```php
<?php
$text = "Dies ist ein kleines Beispiel zum Durchsuchen. Eine andere Möglichkeit lernen wir später.";
echo substr($text, 0, 15)."<br />"; //Gibt den Anfang des Textes aus
echo substr($text, 12)."<br />"; //Gibt alles ab dem 12. Zeichen aus
echo substr($text, strlen($text)-15)."<br />"; //Gibt die letzten 15 Zeichen aus
?>
```

### Replacing

```str_replace()``` let's us search and replace a value. It **is** case sensitive (case insensitive would be ```str_ireplace()```).

```php
<?php
$text = "Dies ist ein kleines Beispiel";
$text = str_replace("ist", "war", $text);
echo $text;
?>
```

**Caution:** This can also replace values inside other words - For example replacing "er" with "sie" - would result in "Peter" turning into "Petsie".

One option to prevent that would be adding spaces in front and after the search word.

We can also replace multiple values at once using arrays:

```php
<?php
$text= "Sie sollten täglich Früchte, Gemüse und Ballaststoffe essen.";
$gesund = array("Früchte", "Gemüse", "Ballaststoffe");
$lecker = array("Pizza", "Bier", "Eiscreme");

$new_text = str_replace($gesund, $lecker, $text); 
echo $new_text; //Sie sollten täglich Pizza, Bier und Eiscreme essen.
?>
```

Example of replacing line breaks using both the ```str_replace()``` function and the ```nl2br()``` function:

```php
<?php
$text = $_POST['text'];
echo "Unformatiert sieht der Text so aus: <br />";
echo $text;
 
echo "<br /><br /> Mit str_replace sieht dies so aus: <br />";
echo str_replace("\n", "<br />", $text);
 
echo "<br /><br /> Mit nl2br sieht dies so aus: <br />";
echo nl2br($text);
?>
```

## Sessions

HTTP doesn't save information between multiple accesses of the website of a user. So if we want to save certain information of a user, for example the username they used to log in -  we use **PHP-Sessions**.

Every user gets a specific **session-id**, so that the webserver is able to identify the user. The session id is either added to the URL as a GET-Parameter or, more commonly and safer, saved in a lokal cookie.

This way the webserver can store information (session-variables) about the visitor, for example which username they use or which articles are in the shopping cart.

The user **can't** see the session variables.

### Register a session

```php
<?php
session_start();
?>
```

It is recommended to have this code at the top, before we access any sessions values.

In order to save a value over multiple page-views inside the session, we do this:

```php
<?php
$_SESSION['name'] = "wert";
?>
```

And we access it like this:

```php
<?php
$name = $_SESSION['name'];
echo $name;
?>
```

**Important**: whenever we work with sessions somewhere, ```session_start()``` has to have been run already! On ANY site.

### Checking if a session variable is registered already

```php
<?php
session_start();
 
 
if (!isset($_SESSION['visited'])) {
   echo "Du hast diese Seite noch nicht besucht";
   $_SESSION['visited'] = true;
} else {
   echo "Du hast diese Seite zuvor schon aufgerufen";
}
?>
```

Another example:

```php
<?php
session_start();
 
 
if (isset($_SESSION['username'])) {
   echo "Herzlich Willkommen ".$_SESSION['username'];
} else {
   echo "Bitte erst einloggen";
}
?>
```

### Deleting a session

Deleting all session data

```php
<?php
session_destroy();
?>
```

This is useful when the user wants to log out for example.

If we just want to delete one variable we use ```unset()```.

```php
<?php
unset($_SESSION['name']);
?>
```

## Own functions

```php
<?php
function zusammenrechnen($a, $b) {
   $addition = $a+$b;
   $multiplikation = $a*$b;
   if($addition > $multiplikation) {
      return $addition;
   } else {
      return $multiplikation;
   }
}
echo zusammenrechnen(1,10)."<br />";
echo zusammenrechnen(2,3)."<br />";
echo zusammenrechnen(-5,8)."<br />";
?>
```

A function starts with the key word ```function``` followed by the name + optional parameters.

The variables used inside a function are only valid inside it - if we change a variable inside a function, it won't affect variables outside of it (except for global variables).

So this, for example, **won't** work:

```php
<?php
$wochentag = "Sonntag";

function begruessung($name) {
   echo "Hallo $name, ich wünsche dir einen schönen $wochentag";
}

begruessung("John");
?>
```

because the variable "wochentag" is not known inside the function.

We would have to actually pass it into the function:

```php
<?php
$wochentag = "Sonntag";

function begruessung($name, $tag_in_der_woche) {
   echo "Hallo $name, ich wünsche dir einen schönen $tag_in_der_woche";
}

begruessung("John", $wochentag);
?>
```

### Optional parameters

To define a parameter as optional, we simply give it a default value.

```php
<?php
function zeilenumbrueche_ersetzen($text, $neues_zeichen = "<br />") {
   return str_replace("\n", $neues_zeichen, $text);
}

$text = "Dies \n ist \n ein \n Beispiel \n\n";
echo zeilenumbrueche_ersetzen($text);
echo zeilenumbrueche_ersetzen($text, " --UMBRUCH --");
?>
```

We can either pass both parameters, or just the $text parameter.

We **can't mix optional and non-optional parameters** -  we first define all non-optional parameters, and then we can define optional ones too.

It makes sense to define the most used parameters first.

### Return values

Once the return value is returned, the function does not continue.

```php
<?php
function rechnen($a, $b) {
   if($a == 0 or $b == 0) {
      return null;
   }
   
   echo "Berechne Ergebnis für $a und $b:";
   return 10.0/$a + 100.0/$b;
}
```

If we want to return multiple values, we use an array.

```php
<?php
function suchen_und_ersetzen($text, $suche, $ersetzen) {
   $anzahl = substr_count($text, $suche);
   $neuer_text = str_replace($suche, $ersetzen, $text);
   return array($anzahl, $neuer_text);
}

$text = "Dies ist ein Beispiel und es ist ein ziehmlich einfaches Beispiel";
$ergebnis = suchen_und_ersetzen($text, "ist", "war");

echo "Anzahl: ".$ergebnis[0]."<br />";
echo "Neuer Text: ".$ergebnis[1];
?>
```

If we want to return a lot of values, using an associative array might be easier than using numbers for choosing the value we want.

We generally don't want to use ```echo``` functions inside of function. Rather use the return value and echo it where there function was called.

## Embedding other php files

Generally we want to split up our code into different files. In order to change the menu, we should only have to change one file - not having to make the same change in multiple files.

We can use the ```include()``` and ```require()``` functions, to load code from a different file. If the file is not found, include shows a warning, but require **cancels the code execution.**

We could have these files:

**header.php**
```php
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Meine Website</title>
    <style>
      .content {border: 1px solid #000000;}
    </style>
  </head>
```

**menu.php**
```php
<body>
Menu:
<ul>
<li><a href="seite1.php">Seite 1</a></li>
<li><a href="seite2.php">Seite 2</a></li>
</ul>
```
**footer.php**

```php
Footer: <a href="impressum.php">Impressum</a> | <a href="contact.php">Kontakt</a>
</body>
</html>
```

Using these files would look like this:

```php
<?php
include('header.php');
include('menu.php');
?>
<div class="content">Hier steht der Inhalt von Seite 1</div>
 
<?php
include('footer.php');
?>
```

We have to keep in mind that the code from these files is basically **copied** into the current file. So if we use the same variable names in the loaded file and the current one, they can be overwritten.

The include functions should always be at the beginning of the script (except if the file contains purely html)

It makes sense to move functions and variables that we are using often into separate files and load them with include in several different places.

For example:

* a config file for central configuration values
* a file for connecting to the database
* a file for all your own functions


## File upload

```php
<form action="upload.php" method="post" enctype="multipart/form-data">
<input type="file" name="datei"><br>
<input type="submit" value="Hochladen">
</form>
``` 

We have to set the ```enctype``` tag.

We can then accesss the uploaded file within the ```$_FILES``` variable.

```php
move_uploaded_file($_FILES['datei']['tmp_name'], 'upload/'.$_FILES['datei']['name']);
```

For safety reasons we however shouldn't actually use this file.

## Cookies

Just like Sessions, we can use cookies to save certain data over muliple site accesses. But by using **cookies** we can save data for even longer than just the session - cookies are saved as a file on the computer of the visitor.

They are, for example, used to remember and identify a user even after the session, when he has already left the homepage.

### Setting a cookie

```php
<?php
setcookie("username","Max",0); 
?>
```

The first value is the name of the cookie, the second value is the value saved inside it. The third value is the time how long the cookie is valid.

0 means the cookie is valid until the user closes the browser.

To set the time, we do something like this:

```php
<?php 
setcookie("username","Max",time()+(3600*24));
?>
```

This cookie would last 24 hours.

### Reading a cookie

```php
<?php 
$cookie = $_COOKIE["username"]; 
echo "Der Inhalt des Cookies: $cookie"; 
?>
```

### Deleting a cookie

```php
<?php
setcookie("username","",time() - 3600);
```

To delete a cookie, we have to specify a time in the past. This way the browser sees the cookie as invalid and deletes it.

**Warning** - Cookies can be faked and edited!

Cookies are often used to implement a "Stay signed in" function. A cookie with a certain value is saved on the computer of the user and is then again read and the user is logged in.

## Constants

A constant can't be changed once it is defined. This is useful if we want to specify, for example, the length of an entry or the version of something.

```php
<?php
const VERSION = "1.0.5";
const MAX_EMAIL_LENGTH = 10;

$email = "info@php-einfach.de";

echo "Dies ist Version ".VERSION;

if( strlen($email) > MAX_EMAIL_LENGTH) {
   echo "<br /> Die E-Mail darf maximal ".MAX_EMAIL_LENGTH." Zeichen lang sein.";
}
?>
```

We usually name constants with UPPER CASE LETTERS.

### Class constants

Class constants are only valid in combination with a class and are accessed  by  ```classname::NAME_OF_THE_CONSTANT``` or, when inside the class ```self:NAME_OF_THE_CONSTANT```

```php
<?php
class User {
	const VERSION = "1.0.5";
	const MAX_EMAIL_LENGTH = 10;

	public function checkEmail($email) {
		if(strlen($email) > self::MAX_EMAIL_LENGTH) {
			return false;
		}
		return true;
	}
}

$user = new User();
echo "Die maximale Länge ist ".User::MAX_EMAIL_LENGTH."<br />";

if(!$user->checkEmail("info@php-einfach.de")) {
	echo "Die E-Mail Adresse ist zu lang";
}
?>
```

### Pre-defined constants

There are some pre defined constants, for example the OS or the PHP version:

```php
<?php
echo "Aktuelle PHP-Version: ".PHP_VERSION;
echo "<br /> Betriebssystem des Server: ".PHP_OS;
echo "<br /> Maximale Größe für ein Integer: ".PHP_INT_SIZE;
?>
```

```php
<?php
echo "Aktuelle Programmzeile: ".__LINE__;
echo "<br /> Aktuelle Programmzeile: ".__LINE__;
echo "<br /> Aktueller Dateiname: ".__FILE__;
echo "<br /> Aktuelles Verzeichnis: ".__DIR__;
?>
```

The ```LINE``` constant returns the current code line, for example.

## Regular expressions

Regular expressions let us check for patterns in a string. The regular expressions starts and ends with a ```/```.

The function ```preg_mach()``` returns true if the pattern has been found, ```preg_replace()``` lets us replace certain text areas.

```php
<?php
$text = "Wir haben 13 Katzen";
$muster = "/1[0123456789]/";
if(preg_match($muster, $text)) {
   echo "Eingabe enthält das Muster";
} else {
   echo "Eingabe enthält nicht das Muster";
}
?>
```

This checks if the string has a number between 10 and 19.

Another example:

```php
$muster = "/[89][0123456789][13579]/";
```

This checks if the first number is 8 or 9, then any number from 0 to 9, and the last number has to be uneven, so 1,3,5 or 7.

We can also write ```[0-9]``` to specify number ranges.

We can check for letters the same way.

There are lists online that specify lists of regex expressions, such as length, the first letter, the end, the exact number of occurences...

## Additional functions

### SQL functions

**$pdo = new PDO('mysql:host=localhost;dbname=databasename', 'username', 'password');** - Erzeugt eine neue Datenbankverbindung mittels PDO.

**$pdo->query($sql)** - Sendet einen SQL-Query an die Datenbank.

**$statement = $pdo->prepare($sql)** - Erzeugt ein prepared Statement.

**$statement->execute($parameter)** - Führt ein prepared Statement aus.

**$statement->fetch()** - Iteriert über das Ergebnis des prepared Statements.

**$statement->rowCount()** - Gibt die Anzahl der Zeilen des Ergebnisses zurück.

**$statement->errorInfo()** - Gibt bei einem SQL-Fehler die Fehlerinformationen zurück.