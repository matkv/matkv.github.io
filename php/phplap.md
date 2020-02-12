---
layout: default
title: PHP Infos 
parent: PHP & SQL
nav_order: 4
---

# PHP

## Object oriented PHP

### Object
```php
<?php
class Fahrzeug
{
   private $geschwindigkeit = 0;     /* Eigenschaft */
   function beschleunigen($wert) {    /* Methode */
      $this->geschwindigkeit += $wert;
   }
   function ausgabe() {               /* Methode */
      echo "Geschwindigkeit: $this->geschwindigkeit<br />";
   }
}
```

Encapsulation: private (only class which specifies it), protected (only parent and child classes), public (everyone)

If nothing is specified -> public

With ```$this``` we can access the current object. With the ```->``` we access methods and properties.

### Creating and using a class

We create a new object with ```new```.

```php
<html>
<head><?php include("class_lib.php;") ?> </head>
<body>
<?php
$vespa = new Fahrzeug();
$scania = new Fahrzeug();

$vespa->ausgabe();
$vespa->beschleunigen(20);
$vespa->ausgabe();

$scania->ausgabe();

/* Private Eigenschaft, nicht erreichbar */
echo "Private Eigenschaft: $scania->geschwindigkeit";
?>
</body>
</html>
```

### Getters and setters

```php
function setName($newName){
   $this->name = $newName;
}
function getName(){
   return $this->name;
}
```

### Constructor

```php
class Fahrzeug
{
   private $geschwindigkeit;
   private $bezeichnung;

   function __construct($bez, $ge)
   {
      $this->bezeichnung = $bez;
      $this->geschwindigkeit = $ge;
   }
   … …
}

//usage example

$vespa = new Fahrzeug("Vespa Piaggio",25);
```

### Sessions

```session_start()``` needs to be called on each site that is relevant to the session - **before** the html tag.

In the Session-Array ```$_SESSION``` we can save values.

With ```session_destroy()``` we can explicitly close a session.

Session example:

```php
<?php
   /* Session-Start oder Session-Wiederaufnahme */
   session_start();
?>
<html>
<body>
<?php
   /* Zugriffszähler existiert? */
   if (isset($_SESSION["zz"]))
      $_SESSION["zz"] = $_SESSION["zz"] + 1;
   else
      $_SESSION["zz"] = 1;

   /* Ausgabe Zugriffszähler */
   echo "Ihr Besuch Nr.: " . $_SESSION["zz"] . "<br />";

   /* Ausgabe Session-ID */
   echo "Ihre Session-ID: " . session_id();
?>
</body>
</html>
```

### Login example

```php
<?php
   /* Vor Beenden der Session wieder aufnehmen */
   session_start();

   /* Beenden der Session */
   session_destroy();
   $_SESSION = array();
?>
<html>
<body>
<h3>Login-Seite</h3>
<form action="sc_schutz_b.php" method="post">
  <p><input name="n" /> Name</p>
  <p><input type="password" name="p" /> Passwort</p>
  <p><input type="submit" value="Login" /></p>
</form>
</body>
</html>
```
On the ```sc_schutz_b.php``` page we then check if the "n" POST value is set, so we know the access came from the login page. Else we show an error message:

```php
<?php
   /* Session starten oder wieder aufnehmen */
   session_start();
   
   if(isset($_POST["n"])) { /* Falls Aufruf von Login-Seite */
      if($_POST["n"] == "Hans" && $_POST["p"] == "bingo" /* Falls Name und Passwort korrekt */
         || $_POST["n"] == "Gerd" && $_POST["p"] == "tango")
      {
         $_SESSION["n"] = $_POST["n"];
      }
   }  
   if (!isset($_SESSION["n"])) /* Kontrolle, ob innerhalb der Session */
      exit("<p>Kein Zugang<br /><a href='sc_schutz_a.php'>Zum Login</a></p>");
?>

<html>
<body>
<h3>Intro-Seite</h3>
<?php
   /* Begrüßung des Benutzers */
   echo "<p>Hallo " . $_SESSION["n"] . "</p>";
?>
<p><a href="sc_schutz_c.php">Zur beliebigen Seite</a></p>
<p><a href="sc_schutz_a.php">Logoff</a></p>
</body>
</html>
```
Another example of a site that checks if the login has happened:

```php
<?php
   /* Session wieder aufnehmen */
   session_start();

   /* Kontrolle, ob innerhalb der Session */
   if (!isset($_SESSION["n"]))
      exit("<p>Kein Zugang<br /><a href='sc_schutz_a.php'>Zum Login</a></p>");
?>

<html>
<body>
<h3>Beliebige Seite</h3>
<?php
   /* Begrüßung des Benutzers */
   echo "<p>Hallo " . $_SESSION["n"] . "</p>";
?>
<p><a href="sc_schutz_b.php">Zur Intro-Seite</a></p>
<p><a href="sc_schutz_a.php">Logoff</a></p>
</body>
</html>
```

### Navigation bar example

```php
<nav class='navbar'>
   
        <a href="index.php">Home</a>
    
    <?php if(isset($_SESSION["user"])) { //check if user is logged in ?>
    
        <a href="logout.php">Logout</a>
    
    <?php } else { ?>
    
        <a href="login.php">Login</a>
   
    <?php } ?>

</nav>
```

# ER Diagrams

Elements:

* Entity: object (square) and attributes (circles)
* Relation: rhombus - describes how entities are related to each other
* between them are connectors (lines), the connectors can have a specified cardinality (1-n, n-m..)

# SQL

Prepared statements should be used. SQL Injection should be prevented by using prepared statements and checking if the input matches the expected data type.

## MySQLi object oriented

### Verbindung aufnehmen
Prozedural: ```$con = mysqli_connect('host', 'user', 'pw', 'db');```
Objektorientiert: ```$con = new mysqli('host', 'user', 'pw', 'db');```

### SQL Query

Prozedural: ```$res = mysqli_query($con, "select * from personal");``` 
Objektorientiert: ```$res = $con -> query("select * from personal");``` 

### Anzahl der Datensätze

```$num = mysqli_num_rows($res);```

### Datensätze auslesen

```$dsatz = mysqli_fetch_assoc($res) ```

Prozedural: ```$row = mysqli_fetch_assoc($res);```

Objektorientiert: ```$row = $result->fetch_assoc(); ```

oder ```$row = $result->fetch_object(); ```

### Verbindung schließen
Prozedural: ```mysqli_close($con);```

Objektorientiert: ```$con -> close();```


## n*m Relations

Example: An author can have written multiple books, but a book can also have been written by multiple authors.

For a n*m relation we need an additional mapping table. This is a separate table, for example containing the book_id, and the author_id.

Let's say the mapping table is called "buch_autor":

Adding books to an author:

```php
INSERT INTO buch_autor (buch_id, autor_id) VALUES (1,1);
INSERT INTO buch_autor (buch_id, autor_id) VALUES (2,1);
```

So here the same author has 2 different books.

Adding multiple authors to one book:

```php
INSERT INTO buch_autor (buch_id, autor_id) VALUES (7,1);
INSERT INTO buch_autor (buch_id, autor_id) VALUES (7,2);
```

Getting all books of one author:

```php
SELECT * FROM buch b, autor a, buch_autor ba
   WHERE a.id = ba.autor_id
   AND ba.buch_id = b.id
   AND a.id = 1;    //specifyng the author
```

Getting all authors of one book:

```php
SELECT * FROM buch b, autor a, buch_autor ba	
   WHERE a.id = ba.autor_id     
   AND ba.buch_id = b.id     
   AND b.id = 7; //specifying the book
```

## PHP error reporting

Either setting the php.ini parameters:

```
error_reporting = E_ALL
log_errors = On
display_errors = Off
```

Or setting the parameters at the beginning of the php script:

```
error_reporting(E_ALL);
ini_set('log_errors','1');  //Fehler werden mitgeloggt
ini_set('display_errors','0');  //es werden keine Fehler ausgegeben
```

The errors are then logged into the error log file. We can set the path specifically:

```
ini_set('error_log', '/full/path/to/your/file/my-errors.log');
```

### Example of showing an expected error to the user

```php
<?php
$errMsg = array();
if (isset($_POST['submit'])){
    if (trim($_POST['Name']) === ''){
        $errMsg[] = 'Please enter your name';
    }
    if (!preg_match("/^[0-9]{3}[-]{1,1}[0-9]{4}$/", $_POST['Phone'])){
        $errMsg[] = 'Phone number should be entered as digits in the following format: ###-####';
    }
    if (count($errMsg)!== 0){
        foreach ($errMsg as $key => $value){
            $tmp .= "<li>$value</li>";
        }
        echo "An error has occurred:<ul>$tmp</ul>";
    } else {
        echo "Congratulations! You successfully entered your Name and Phone Number!";
    }
}
?>
<form name="myForm" method="POST" action="<?php echo $_SERVER['PHP_SELF']?>">
    Name:
    <input name="Name" type="text" value="<?php echo htmlentities($_POST['Name'])?>" />
    <br />
    Phone:
    <input name="Phone" type="text" value="<?php echo htmlentities($_POST['Phone'])?>" />
    <input type="submit" name="submit" value="Submit" />
</form>
```

### Try catch

```php
<?php
try {
    if (file_exists('unbekanntes_file.php'))
        include 'unbekanntes_file.php';
    else
        throw new Exception('File not found');
} catch (Exception $e) {
    echo $e->getMessage();
// weiterführende Fehlerbehandlung...
}

?>
```

## File upload

```html
<html>
<body>
<form enctype="multipart/form-data" action="upload.php" method="post">
  <p>Datei: <input name="upfile" type="file" size="25" /></p>
  <p><input type="submit" value="Senden" /></p>
</form>
</body>
</html>
```

upload.php

```php
<?php
   echo "Originaldateiname: ". $_FILES["upfile"]["name"] . "<br />";
   echo "Dateigröße: ". $_FILES["upfile"]["size"] . "<br />";
   echo "Dateityp: ". $_FILES["upfile"]["type"] . "<br />";

   $dname = explode(".",$_FILES["upfile"]["name"]);
   $ext = $dname[count($dname)-1];
   echo "Dateiendung: $ext <br />";

   echo "Temporärer Dateiname: ". $_FILES["upfile"]["tmp_name"] . "</p>";

   if($_FILES["upfile"]["size"]>0 && $ext=="gif") {
      copy($_FILES["upfile"]["tmp_name"],"im_upload.gif");
      echo "<p>Datei wurde kopiert in im_upload.gif<br />";
      echo "<img src='im_upload.gif' /></p>";
   } else
      echo "<p>Kopierfehler</p>";
?>
```

## Generating a PDF

```php
<html>
<body>
<?php
   require("fpdf/fpdf.php");

   $pdf = new FPDF();
   $pdf->AddPage();
   $pdf->Output("pdf_test.pdf", "F");
   header("Location: pdf_test.pdf");
?>
</body>
</html>
```

We can then save the file on a webserver, and show the PDF on the website:

```php
header('Content-Type: application/pdf');
  $pdf = file_get_contents('/path/test.pdf');
  echo $pdf;
```