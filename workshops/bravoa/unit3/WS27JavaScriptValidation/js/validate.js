// JavaScript Documents
//Expressions es un objeto
var expressions = {
    plate: /^[FfDd][a-zA-Z]{2}[0-9]{4}$/,
    onlyLetters: /^[a-zA-Z\s_\d]{1,30}$/,
    model:/^[a-zA-Z\s.-\d]{1,10}$/
}

function validateName(){
    var expRegName=/^[a-zA-ZÑñÁáÉéÍíÓóÚú\s]+$/;
    var brandName = document.getElementById("name");
    if (!expRegName.exec(brandName.value)){
        alert("Only write letters.");
        return false;
    }else{
        return true;
    }
}

function validatePlate(){
    var platename = document.getElementById("plate").value;
    if (!(expressions.plate).test(platename)){
        window.alert("Invalid Plate!!");
    }
}

function validateID(){
    var expRegName=/^[a-z]+$/;
    var brandName = document.getElementById("ID");
    if (!expRegName.exec(brandName.value)){
        alert("Only write numbers.");
        return false;
    }else{
        return true;
    }
}
