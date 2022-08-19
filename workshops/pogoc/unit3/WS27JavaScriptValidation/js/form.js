function validatePassport () {
    var expPass = /^[0-9]{10}$/;
    var passSerial = document.getElementById("passportSerial");
    if (!expPass.exec(passSerial.value)) {
        alert("Formato incorrecto");
        return false;
    } else {
        return true;
    }
}

function validateName () {
    var expName = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var fullName = document.getElementById("fullname");
    if (!expName.exec(fullName.value)) {
        alert("Formato incorrecto, solo letras");
        return false;
    } else {
        return true;
    }
}

function validateCountry () {
    var expCountry = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var Country = document.getElementById("countryid");
    if (!expCountry.exec(Country.value)) {
        alert("Ciudad incorrecta, solo letras");
        return false;
    } else {
        return true;
    }
}