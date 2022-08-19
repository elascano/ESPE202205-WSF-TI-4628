
function validateWorth1()
{
    var expRegNumbers =  /^\d+\.\d{0,2}/;
    var numbers = document.getElementById("addend1");
    if (!expRegNumbers.exec(numbers.value)) {
        alert("Se recibe solo números");
        document.getElementById("addend1").value = "";
    }

}

function validateWorth2()
{
    var expRegNumbers =  /^\d+\.\d{0,2}/;
    var numbers = document.getElementById("addend2");
    if (!expRegNumbers.exec(numbers.value)) {
        alert("Se recibe solo números");
        document.getElementById("addend2").value = "";
    }

}