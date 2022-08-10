<?php

        class obtenerDatos extends conexion {
            public function mostrarDatos(){
                try{
                    $conexion = parent::conectar();
                    $coleccion = $conexion->RegisterUser;
                    $datos = $coleccion->find();
                    return $datos;
                } catch (\Throwable $th){
                    return $th->getMessage();
                }
            }

            public function obtenerDocumento($id) {
                try {
                    $conexion = Conexion::conectar();
                    $coleccion = $conexion->RegisterUser;
                    $datos = $coleccion->findOne(
                                            array(
                                                '_id' => new MongoDB\BSON\ObjectId($id)
                                            )
                                        );
                    return $datos;
                    print_r($datos);
                } catch (\Throwable $th) {
                    echo 'Excepción capturada: ',  $th->getMessage(), "\n";
                }
            }


        }

?>
