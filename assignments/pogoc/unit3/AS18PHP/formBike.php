<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel=StyleSheet href="style.css" type="text/css">
    <title>Document</title>
</head>
<body>
    <h1>Form for Bicycle</h1>
    <h3>Do you consider the price of the bicycles are high?</h3> 
    <p><?php echo $_POST["priceBike"]; ?></p> 

    <h3>How many years have you used the bicycle?</h3> 
    <p><?php echo $_POST["selectYear"];?> years</p>
    
    <h3>Tell a story with your bicycle:</h3> 
    <p><?php echo $_POST["anecdote"]; ?></p> 

    <h3>Post a photo of your current bicycle:</h3> 
    <img src="./<?php echo $_POST["imageBike"]; ?>" width="350px"> 
    <?php
    $Consideraciones= $_POST['priceBike'];
    $Anios= $_POST['selectYear'];
    $Anecdota= $_POST['anecdote'];
    $Imagen= $_POST['imageBike'];

    $con=mysqli_connect("localhost","root","","bicicletas");
    mysqli_query($con,"INSERT INTO formulario (consideraciones, anios, anecdota, foto) VALUES('$Consideraciones', '$Anios','$Anecdota', '$Imagen')");
    ?>

    <h1> Your information has been saved correctly. </h1>
</body>
</html>
