<?php
$link = mysql_connect("localhost","root","") or die("<h2>Server not found</h2>");;
$db = mysql_select_db("info", $link) or die("<h2>Information not found</h2>");

$Name = $_POST['name'];
$Amount = $_POST['amount'];
$Price = $_POST['price'];
$Distributor = $_POST['distributor'];

$req=(strlen($Name)*strlen($Amount)*strlen($Price)*strlen($Distributor)) or die ("Not all fields have been filled")

mysql_query("INSERT INTO info VALUES ('','$Name','$Amount','$Price','$Distributor')",$link);
?>

<h2> Registered Product: </h2><h1><?php echo $_GET["name"]; ?> </h1><br>
<h1><?php echo $_GET["amount"]; ?></h1><br>
<h1><?php echo $_GET["price"]; ?> </h1><br>
<h1><?php echo $_GET["distriutor"]; ?></h1><br>