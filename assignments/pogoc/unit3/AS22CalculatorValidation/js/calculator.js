function additonOfTwoNumbers() {
    var num1 = parseFloat(document.getElementById("value1").value);
    var num2 = parseFloat(document.getElementById("value2").value);

    var add=num1+num2;
    alert("The addition of "+num1+" + "+num2+" is --> "+add);
}

function subtractionOfTwoNumbers() {
    var num1 = parseFloat(document.getElementById("value1").value);
    var num2 = parseFloat(document.getElementById("value2").value);

    var sub=num1-num2;
    alert("The subtraction of "+num1+" - "+num2+" is --> "+sub);
}