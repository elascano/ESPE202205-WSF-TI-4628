<?php
    $names=$_POST['name']
    $howMany=$_POST['howMany']
    $buyRent=$_POST['buyRent']

    $con=mysqli_connect("localhost","saguanoluisa","150699","saguanoluisa");
    mysqli_query($con, "INSERT INTO departamentos (Names, Num. Apartments, Buy Rent) VALUES('$names', '$howMany','$buyRent')");

    echo ("Save data")
?>