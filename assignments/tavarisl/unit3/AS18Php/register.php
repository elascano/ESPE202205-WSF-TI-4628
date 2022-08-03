<?php
$Apellido= $_POST['second_name'];
$Nombre=   $_POST['first_name'];
$Date = $_POST['date'];
$Addr = $_POST['address'];
$Correo = $_POST['email'];
$Genero = $_POST['radio'];
$Celular = $_POST['cellphone'];


$con=mysqli_connect("localhost","tentacle","tentacle","vinilo");
mysqli_query($con,"INSERT INTO registro (apellido,nombre,Nacimiento,Direccion,Correo,Genero,celular)
 VALUES('$Apellido', '$Nombre', '$Date', '$Addr', '$Correo', '$Genero', '$Celular')");

echo ("Sus datos han sido guardados")
?>