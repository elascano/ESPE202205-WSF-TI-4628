<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="Style/css.css" rel="stylesheet" type="text/css"/>
    <title>Data</title>
</head>
<body>
    <div class="form-refister">
        <h4>Data</h4>
        Names: <h2><?php echo $_GET["name"];?> </h2><br>
        Type maintenance: <h2><?php echo $_GET["maintenance"];?> </h2><br>
        Model: <h2><?php echo $_GET["model"];?> </h2><br>
        Phone: <h2><?php echo $_GET["phone"];?> </h2><br>
        Price: <h2><?php echo $_GET["price"];?> </h2><br>
    </div>
</body>
</html>

