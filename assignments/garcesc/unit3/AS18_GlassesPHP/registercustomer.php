<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="CSS/Styles.css" rel="stylesheet" type="text/css"/>
    <title>Registrado</title>
</head>
<body>
<div>
        <h1>
            Dino Glasses
        </h1>
    </div>
<section class="form-register">
    <h3>Bienvenido</h3><h2><?php echo $_GET["name"];?></h2><br>
    <table>
        <tbody>
            <tr>
                Se enviara una confirmacion a tu correo: <h2><?php echo $_GET["email"];?></h2><br>
            </tr>
            <tr>
                Medida de lente: <h2><?php echo $_GET["medida"];?></h2><br>
            </tr>
            <tr>
                Lente Tipo Gafas: <h2><?php echo $_GET["Gafas"];?></h2><br>
            </tr>
            <tr>
                Antirreflejo: <h2><?php echo $_GET["Reflejo"];?></h2><br>
            </tr>
            <tr>
                Antirayones: <h2><?php echo $_GET["rayones"];?></h2><br>
            </tr>
        </tbody>
    </table>
</section>
</body>
</html>