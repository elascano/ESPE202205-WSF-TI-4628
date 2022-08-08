<?php
 require_once "vendor/autoload.php";
class Conexion
{
    public function conectar()
    {
        try
        {
            $servidor="127.0.0.1";
            $usuario="fsw";
            $password="4628";
            $baseDatos="papeleria";
            $puerto="27017";

            $cadenaConexion= "mongodb://" . 
            $usuario . ":" .
            $password . "@" .
            $servidor . ":" .
            $puerto . "/".
            $baseDatos;

            $cliente = new MongoDB\Client($cadenaConexion);
            return $cliente->selectDatabase($baseDatos);
        }
         catch(\Throwable $th)
         {
            return $th->getMessage();
         }

    

    }
}

//$objeto = new Conexion();
//var_dump($objeto->conectar());

?>