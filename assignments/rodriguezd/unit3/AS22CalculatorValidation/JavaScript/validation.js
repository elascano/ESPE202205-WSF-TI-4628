
function validateWorth1()
{
    var expRegNumbers =  /^[0-9]*(\.?)[0-9]+$/;
    var numbers = document.getElementById("addend1");
    if (!expRegNumbers.exec(numbers.value)) {
        alert("Se recibe solo números");
        document.getElementById("addend1").value = "";
    }

}

function validateWorth2()
{
    var expRegNumbers =  /^[0-9]*(\.?)[0-9]+$/;
    var numbers = document.getElementById("addend2");
    if (!expRegNumbers.exec(numbers.value)) {
        alert("Se recibe solo números");
        document.getElementById("addend2").value = "";
    }

}