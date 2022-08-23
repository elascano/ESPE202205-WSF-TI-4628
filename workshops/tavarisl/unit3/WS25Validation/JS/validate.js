var expressions={
    place:/^[^FfDd][a-zA-Z]{2}[0-9]{4}$/,      //Exprecion regular
    onlyLetters: /^[a-zA-Z\s-_\d]{1,30}$/,    //
    model: /^[a-zA-Z\s.-\d]{1,10}$/

}

function validateBrand(){

    var expRegName= /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var brandName = document.getElementById("brand");
    if (!expRegName.exec(brandName.value)){
        alert("Only write letters");
        return false;

    }else {
        return true;
    }
}

function validatePlate(){

    var plateName= document.getElementById('plate').value;

    if(!(expressions.plate).test(plateName)){

        window.alert("Invalid plate!!");
    }
}

function validateModel(){
    var inp= document.getElementById('model').value;

    if(!(expressions.model).test(inp)){
        return false;
    }
}