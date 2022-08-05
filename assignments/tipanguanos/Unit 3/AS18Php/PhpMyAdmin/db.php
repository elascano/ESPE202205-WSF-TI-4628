<?php
function conn(){
    $hostname = "localhost";
    $usuariodb = "root";
    $passworddb = "";
    $dbname = "wsf_4628";

        $conectar = mysqli_connect($hostname,$usuariodb,$passworddb,$dbname);
        return $conectar;
}
?>