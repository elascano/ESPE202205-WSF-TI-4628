<?php
include_once('db.php');
//Recibo todos los datos del formulario
$nombres=$_POST['nombres'];
$marca=$_POST['marca'];
$codigo=$_POST['codigo'];
$clave=$_POST['clave'];

echo "LOS DATOS SON LOS SIGUIENTES: <br>";
echo "$nombres,$marca,$codigo",$clave;

        $conectar=conn(); //ejecuta las conexiones a la b.d
        $sql="INSERT INTO productos (nombres,marca,codigo,clave)
        VALUES ('$nombres','$marca','$codigo','$clave')";
        $resul = mysqli_query($conectar, $sql)or trigger_error("Query Failed! SQL- Error: ".mysqli_error($conectar), E_USER_ERROR);

        echo "$sql";

?>