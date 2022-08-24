<?php
$Nombre= $_POST['nombre'];
$Email= $_POST['email'];
$Opciones=$_POST['select'];

$serverApi = new ServerApi(ServerApi::V1);
$client = new MongoDB\Client(
    'mongodb+srv://cdsalazar5:carlitos24@cluster0.pgkrmmw.mongodb.net/WSF retryWrites=true&w=majority', [], ['serverApi' => $serverApi]);
$db = $client->WSF;

/*$con=mysqli_connect("localhost","Sebastian","SebasRosero*","wheelchair");
mysqli_query($con, "INSERT INTO articulos (Nombre, Email, Celulares) VALUES('$Nombre', '$Email','$Opciones')");*/


/*$con=mysqli_connect("localhost","Sebastian","SebasRosero*","wheelchair");
mysqli_query($con, "INSERT INTO articulos (Nombre, Email, Celulares) VALUES('$Nombre', '$Email','$Opciones')");*/

echo ("Sus datos han sido guardados")
?>