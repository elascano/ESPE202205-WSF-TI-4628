var expressions = {
    onlyNumbers: /^[0-9]{1}$/,
}

function validateNumbers1() {
    var expRegNum1 = /^[0123456789\s]+$/;
    var NumbersNum1 = document.getElementById("addend1");
    if (!expRegNum1.exec(NumbersNum1.value)) {
        alert("Only write numbers.");
        return false;
    } else {
        return true;

    }
}

function validateNumbers2() {
    var expRegNum2 = /^[0123456789\s]+$/;
    var NumbersNum2 = document.getElementById("addend2");
    if (!expRegNum2.exec(NumbersNum2.value)) {
        alert("Only write numbers.");
        return false;
    } else {
        return true;

    }
}
