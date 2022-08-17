//JAVASCRIPT PARA IMAGENES
function img(opcion) {
    switch (opcion) {
        case 1:
            console.log("mezcla1");
            document.getElementById("foto").src = "img/Mix.png";
            break;
        case 2:
            document.getElementById("foto").src = "img/mezcla2.png";
            console.log("mezcla2");
            break;
        case 3:
            document.getElementById("foto").src = "img/mezcla3.png";
            console.log("mezcla3");
            break;
        case 4:
            document.getElementById("foto").src = "img/mezcla4.png";
            console.log("mezcla4");
            break;

    }
}

