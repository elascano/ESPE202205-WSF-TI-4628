<?php
include_once('db.php');
//Se recibe los datos del formulario
$name=$_POST['name'];
$date=$_POST['date'];
$email=$_POST['email'];
$number=$_POST['number'];
$product=$_POST['product'];
$price=$_POST['price'];
?>

<h2> <?php echo "Los datos ingresados son: <br/>"; ?> </h2>
<h3>Name, Birth Date, Email, Phone Number, Product, Price</h3>
<?php echo "$name, $date, $email, $number, $product, $price"; ?>

<?php
//Consulta sql datos basicos BL
$conectar=conn(); //ejecuta las conexiones a la bd
$sql="INSERT INTO keyboards (name, date, email, number, product, price) 
VALUES ('$name','$date','$email','$number','$product','$price')";
$resul = mysqli_query($conectar, $sql)or trigger_error("Query Failed! SQL- Error: ".mysqli_error($conectar),E_USER_ERROR);
echo "$sql";
?>