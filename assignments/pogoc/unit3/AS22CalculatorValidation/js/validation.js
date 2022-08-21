function validateNumber1() {
    var expRegNumbers = /^[0-9]*(\.?)[0-9]+$/;
    var number = document.getElementById("value1");
    if (!expRegNumbers.exec(number.value)) {
        alert("Only numbers are received!!");
        document.getElementById("value1").value="";
    }
}

function validateNumber2() {
    var expRegNumbers = /^[0-9]*(\.?)[0-9]+$/;
    var number = document.getElementById("value2");
    if (!expRegNumbers.exec(number.value)) {
        alert("Only numbers are received!!");
        document.getElementById("value2").value="";
    }
}