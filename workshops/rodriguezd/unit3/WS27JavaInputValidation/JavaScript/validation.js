


function validateidEspe()
{
    var expRegId = /^[A-Z]+$/;
    var idEspe=document.getElementById("idEspe").value;
    if(!expRegId.exec(idEspe.value))
    {
        alert("id no valido");
    }
}

function validateName() 
{
    var expRegName = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var productName = document.getElementById("name");
    if (!expRegName.exec(productName.value)) {
        alert("Solo se aceptan letras");
        document.getElementById("name").value = "";
    }
        
}

function validateCampus() 
{
    var expRegName = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var productName = document.getElementById("campus");
    if (!expRegName.exec(productName.value)) {
        alert("Solo se aceptan letras");
        document.getElementById("campus").value = "";
    }
        
}