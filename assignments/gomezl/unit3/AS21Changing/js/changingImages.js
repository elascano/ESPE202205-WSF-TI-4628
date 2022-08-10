//javascript 
function changeImage(opc) {
    switch (opc) {
        case 1:
            {
                document.getElementById("bigPicture").src = "./images/img1.jpg";
                break;
            }
        case 2:
            {
                document.getElementById("bigPicture").src = "./images/img2.jpg";
                break;
            }

        case 3:
            {
                document.getElementById("bigPicture").src = "./images/img3.jpg";
                break;
            }

        case 4:
            {
                document.getElementById("bigPicture").src = "./images/img4.jpg";
                break;
            }

    }
}

