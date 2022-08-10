<?php
//Configuracion necesaria para acceder a la data base
function conn(){
    $hostname = "localhost";
    $usuariodb = "root";
    $passeorddb = "12345678";
    $dbname = "admin";

    //Generar la conexion con el servidor
    $conectar = mysqli_connect($hostname, $usuariodb, $passeorddb, $dbname);

    return $conectar;
}



?>