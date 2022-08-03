<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>World of Marker</title>
    <link href="../css/styles.css" rel="stylesheet" type="text/css">
</head>

<body>
    <header>
        <nav class="navegacion">
            <ul class="menu">
                <li><a>WORLD OF MARKER</a></li>
            </ul>
        </nav>
    </header>

    <br /><br />
    <h2>PRODUCT</h2>
    <br /><br />

    <table class="table" border="0">
        <tr>
            <th>
                <img src="../img/<?php echo $_GET["image"]; ?>" width="200" height="200">
                <h3><?php echo $_GET["name"]; ?></h3>
            </th>
            <th>
                <h3><?php echo $_GET["id"]; ?></h3>
                <h2><?php echo $_GET["price"]; ?></h2>
                <p><?php echo $_GET["description"]; ?></p>
            </th>
        </tr>
    </table>

</body>

</html>