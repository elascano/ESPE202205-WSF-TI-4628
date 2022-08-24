
function validateProduct() 
{
    var expRegProduct = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var product = document.getElementById("product");
    if (!expRegProduct.exec(product.value))
     {
        alert("Se recibe solo letras");
        document.getElementById("product").value = ""; 
       
    } 
}

function validateDateProduct()
{
    var diaVencer= document.getElementById("day").value;
    var mesVencer= document.getElementById("month").value;
    var anioVencer= document.getElementById("year").value;
    console.log(diaVencer);
    if(diaVencer=="24" && mesVencer=="8" && anioVencer=="2022")
    {
        alert("The age  in range ");
    }
    else{
        alert("The age not in range")
    }
}

