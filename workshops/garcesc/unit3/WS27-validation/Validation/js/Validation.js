var expressions={
    plate: /^[^FfDd][a-zA-Z]{2}[0-9]{4}$/,
    onlyLetters: /^[a-zA-Z\s_\d]{1,30}$/,
    model: /^[a-zA-Z\s.-\d]{1,10}$/
}

function validateBrand(){
    var expRegName= /^[a-zA-ZÑñÁáÉéÍíÓóÚú\s]+$/;
    var brandName=document.getElementById("name");
    if(!expRegName.exec(brandName.value)){
        alert("Only write letters.");
        return false;
    }else{
        return true;
    }
}

function validatetime(){
    var expRegName= /^[1-9\s]+$/;
    var brandName=document.getElementById("time");
    if(!expRegName.exec(brandName.value)){
        alert("Only write numbers");
        return false;
    }else{
        return true;
    }
}

function validateid(){
    var expRegName= /^[^FfDd][a-zA-Z]{3}[0-9]{2}[/]{1}[a-zA-Z]{1}$/;
    var brandName=document.getElementById("code");
    if(!expRegName.exec(brandName.value)){
        alert("the id must have 3 letters 2 numbers / one letter");
        return false;
    }else{
        return true;
    }
}

function validatePlate(){
    var plateName=document.getElementById('plate').value;
    if(!(expressions.plate).test(plateName)){
        window.alert("Invalid Plate !!!");
    }
}

function validateModel(){
    let inp=document.getElementById('model').value;
    if(!(expressions.model).test(inp)){
        return false;
    }
    return true;
}