
function computeAddition()
{

    var addend1= parseFloat(document.getElementById("addend1").value);
    var addend2= parseFloat(document.getElementById("addend2").value);

    var sum= addend1+addend2;
    alert("La suma de " + addend1 + " + "+ addend2 + " es: "+ sum);

    document.getElementById("addend1").value = "";
    document.getElementById("addend2").value = "";
}