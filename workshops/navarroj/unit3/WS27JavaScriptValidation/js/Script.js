function validateSerial() {
    var expRegSerial = /^([a-zA-Z]{1}[1-9]{3}[a-zA-Z]{1})+$/;
    var Serial = document.getElementById("Serial");
    if (!expRegSerial.exec(Serial.value)) {
        alert("Incorrect format");
        return false;

    } else {
        return true;
    }
}

function validateTime()
{
    var expRegTime=/^([0-9]{3})+$/;
    var Time=document.getElementById("Service");
    if(!expRegTime.exec(Time.value)){
        alert("Unaccepted time");
        return false;
    }
    else{
        return true;
    }
}

function validateArea() {
    var expRegArea = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var Area = document.getElementById("Area");
    if (!expRegArea.exec(Area.value)) {
        alert("Only characters are accepted");
        return false;

    } else {
        return true;
    }
}