<?php
$Nombre= $_POST['nombre'];
$Categoria= $_POST['categoria'];
$Cantidad= $_POST['cantidad'];
$Precio= $_POST['precio'];



$con=mysqli_connect("localhost","admin","admin","juguetes");
mysqli_query($con,"INSERT INTO datos (nombre, categoria, cantidad, precio) VALUES('$Nombre', '$Categoria','$Cantidad','$Precio')");
echo ("Sus datos han sido guardados")
?>