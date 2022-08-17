

function changeImage(opcion) 
{
    switch (opcion) 
    {
        case 1:
            {
                document.getElementById("myImage").src = "img/pinarello.jpg";
                break;
            }
        case 2:
            {

                document.getElementById("myImage").src = "img/cervelo.jpg"; 
                break;
            }
            
        case 3:
            {
                document.getElementById("myImage").src = "img/specialized.jpg";
                break;
            }
            
        case 4:
            {
                document.getElementById("myImage").src = "img/giant.jpg";
                break;
            }
    }
}
    
    
