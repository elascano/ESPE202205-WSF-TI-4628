<?php
	$name=$_POST['customerName'];
	$mail= $_POST['customerMail'];
	$phone= $_POST['custPhoneNum'];
	$address=$_POST['addressCustomer'];
	$brand= $_POST['brandChair'];
	$model= $_POST['modelChair'];
	$color= $_POST['colorChair'];
	$conn = new mysqli("localhost","admin","admin","chair");
 	if ($conn ->connect_error) {
	 		die("Connection failed: " . $conn ->connect_error);
 	}
	$query = "INSERT INTO datachair(name,email,phone,address,brand,model,color) VALUES ('$name','$mail','$phone','$address','$brand','$model','$color');";
  	$resultado = mysqli_query($conn,$query);
	echo $resultado;
	if($resultado){
    	header('location: ../html/save.html');
	}
?>