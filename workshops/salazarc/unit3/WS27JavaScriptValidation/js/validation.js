function validateName() 
{
    var expRegName = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var name = document.getElementById("name");
    if (!expRegName.exec(name.value)) {
        alert("Solo se aceptan letras");
        document.getElementById("name").value = "";
    }    
}

function validatePlate(){
    var expRegPlates=/^[A-Za-z0-9\s]+$/;
    var plate= document.getElementById("plate");
    if (!expRegPlates.exec(plate.value)){
        alert("Solo se acepta letras y números para la placa");
        return false;
    }
    else{
        return true;
    }
}

function validateCustoms(){
    var expRegCustoms=/^[A-Za-z0-9\s]+$/;
    var customs= document.getElementById("customs");
    if (!expRegCustoms.exec(customs.value)){
        alert("Solo se acepta letras y números para el registro de aduanas");
        return false;
    }
    else{
        return true;
    }
}