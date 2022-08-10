<?php 
    require_once "autoload.php";

    class Conexion {
        public static function conectar() {
           try {

        $client = new MongoDB\Client(
            'mongodb+srv://JohnyNavarro:12.34.56.78@cluster0.k6i2b.mongodb.net/?retryWrites=true&w=majority'
            );
        $db = $client->RegisterUser;
                
                return $client->selectDatabase($db);
           } catch (\Throwable $th) {
               return $th->getMessage();
           }
        }
    }

?>