var expressions = {
    plate: /^[A-Z]{3}[-][0-9]{3}-[A-Z]{1} | [A-Z]{3}[-][0-9]{2}[-][0-9]{2}$/,
    onlyLetters: /^[a-zA-Z\s_\d]{1,30}$/,
    model: /^[a-zA-Z\s.-\d]{1,10}$/
}

function validateConcessionary() {
    var expRegName = /^[a-zA-ZÑñÁáÉéÍíÓóÚú\s]+$/;
    var concessionaryName = document.getElementById("concessionary");
    if (!expRegName.exec(concessionaryName.value)) {
        alert("Only write letters.");
        return false;
    } else {
        return true;
    }
}

function validateType() {
    var expRegName = /^[a-zA-ZÑñÁáÉéÍíÓóÚú\s]+$/;
    var typeName = document.getElementById("type");
    if (!expRegName.exec(typeName.value)) {
        alert("Only write letters.");
        return false;
    } else {
        return true;
    }
}


function validatePlate() {
    var plateName = document.getElementById('plate').value;
    if (!(expressions.plate).test(plateName)) {
        window.alert("Invalid Plate !!!");
    }
}
