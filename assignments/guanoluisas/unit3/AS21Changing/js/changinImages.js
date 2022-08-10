//javascript to load images
function changeImage(opc) {
    switch (opc) {
        case 1:
            {
                document.getElementById("myImage").src = "../AS21Changing/images/imag1.jpg";
                break;
            }
        case 2:
            {

                document.getElementById("myImage").src = "../AS21Changing/images/imag2.jpg";
                break;
            }

        case 3:
            {
                document.getElementById("myImage").src = "../AS21Changing/images/imag3.jpg";
                break;
            }

        case 4:
            {
                document.getElementById("myImage").src = "../AS21Changing/images/imag4.jpg";
                break;
            }
    }
}