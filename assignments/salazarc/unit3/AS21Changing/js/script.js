

function changeImage(opc) {
    switch (opc) {
        case 1:
            {
                document.getElementById("myImage").src = "img/sillas.png";
                break;
            }
        case 2:
            {

                document.getElementById("myImage").src = "img/SillaCamilla.png";
                break;
            }

        case 3:
            {
                document.getElementById("myImage").src = "img/SillaElectrica.png";
                break;
            }

        case 4:
            {
                document.getElementById("myImage").src = "img/SillaEstandar.png";
                break;
            }
        case 5:
            {
                document.getElementById("myImage").src = "img/SillaPostural.png";
                break;
            }
    }
}


