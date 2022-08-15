//javascript tp load images
function image(opcion) {
    switch (opcion) {
        case 1:
            console.log("Types");
            document.getElementById("bigPicture").src="images/keyboard1.webp";
            break;
        case 2:
            console.log("Flexible");
            document.getElementById("bigPicture").src="images/keyboard2.jpg";
            break;
        case 3:
            console.log("Wireless");
            document.getElementById("bigPicture").src="images/keyboard3.jpg";
            break;
        case 4:
            console.log("Keys");
            document.getElementById("bigPicture").src="images/keyboard4.jpg";
           break;
    }
}