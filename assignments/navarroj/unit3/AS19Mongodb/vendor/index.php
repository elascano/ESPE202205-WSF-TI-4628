<?php
require_once "./conetion.php";
require_once "./obtenerDatos.php";
$get = new obtenerDatos();
$datos = $get->mostrarDatos();
$id = $_POST['id'];
$find = $get->obtenerDocumento($id);
?>

<!Doctype html>
<html lang="es">

<head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Search user</title>
      <link href="../Styles/style.css" rel="stylesheet" type="text/css">
</head>

<body>

    <center>
        <h1>Dato encontrado</h1>
    </center>
    <center><table class="contenedor" border="1">
        <tr class="headTable">
            <td>Nombre</td>
            <td>Apellido</td>
            <td>Correo electrónico</td>
            <td>Contraseña</td>
            <td>Genero</td>
        </tr>
        <tr>
            <td><?php echo $find->Nombre; ?></td>
            <td><?php echo $find->Apellido; ?></td>
            <td><?php echo $find->Correo; ?></td>
            <td><?php echo $find->Contraseña; ?></td>
            <td><?php echo $find->Genero; ?></td>
        </tr>
    </table></center>
    <br/><br/>
    <center><button><a href="../index.html">Nueva Busqueda</button></center>
</body>