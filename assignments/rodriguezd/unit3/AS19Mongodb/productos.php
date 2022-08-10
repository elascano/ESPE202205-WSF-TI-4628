
<?php
require_once "conexion.php";
require_once "crud.php";
$crud = new Crud();
$datos = $crud->mostrarDatos();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="CSS/styles.css" type="text/css">
    <title>Form</title>
</head>
<body>
    
<body>
<h1>Productos busqueda</h1><br>
    <form class="information"  method="get">
        <input class="textBoxes" type="text" placeholder="Ingrese un id (numero)">
        <input class="buttons" type="submit" value="Buscar"><br><br>
        <table class="datos" border="1">
            <thead>
                <tr>
                    <th>id</th>
                    <th>codigo</th>
                    <th>nombre</th>
                    <th>categoria</th>
                </tr>
            </thead>
            <tbody>
            <?php
            foreach ($datos as $item)
            { ?>
            <tr>
                <td><?php echo $item['idProducto']; ?></td>
                <td><?php echo $item['codigoProducto']; ?></td>
                <td><?php echo $item['nombre']; ?></td>
                <td><?php echo $item['categoria']; ?></td>
            </tr>
        <?php }?>
            </tbody>
        </table>
        </form>
        </body>
</html>