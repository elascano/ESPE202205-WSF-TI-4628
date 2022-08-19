function changeImage(opcion) {
    switch (opcion) {
        case 1: {
                document.getElementById("bikeImage").src ="images/bike1.jpg";
                console.log("Pinarello");
                break;
            }
        case 2: {
                document.getElementById("bikeImage").src ="images/bike2.jpg"; 
                break;
            }  
        case 3: {
                document.getElementById("bikeImage").src ="images/bike3.jpg";
                break;
            }
        case 4: {
                document.getElementById("bikeImage").src ="images/bike4.jpg";
                break;
        }
    }
}