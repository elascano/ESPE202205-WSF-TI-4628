
function validateserial()
{
    var expRegId = /^[A-Z]+$/;
    var serial=document.getElementById("serial").value;
    if(!expRegId.exec(serial.value))
    {
        alert("Serial no valido");
    }
}

function validatefullname() 
{
    var expRegName = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var productName = document.getElementById("name");
    if (!expRegName.exec(productName.value)) {
        alert("Solo se aceptan letras");
        document.getElementById("name").value = "";
    }
        
}

function validateblood() 
{
    var expRegName = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var productName = document.getElementById("campus");
    if (!expRegName.exec(productName.value)) {
        alert("Solo se aceptan letras");
        document.getElementById("campus").value = "";
    }
        
}