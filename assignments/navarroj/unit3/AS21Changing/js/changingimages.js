//javascript to load images
function imagen(opcion) {
    switch (opcion) {
        case 1:
            console.log("artistro");
            document.getElementById("bigPicture").src = "images/artistro.jpg";
            
            break;
        case 2:
            document.getElementById("bigPicture").src = "images/caliart.png";
            console.log("caliart");
            break;
        case 3:
            document.getElementById("bigPicture").src = "images/pelikan.jpg";
            console.log("pelikan");
            break;
        case 4:
            document.getElementById("bigPicture").src = "images/pelikan420.jpg";
            console.log("pelikan420");
            break;
    }
}
