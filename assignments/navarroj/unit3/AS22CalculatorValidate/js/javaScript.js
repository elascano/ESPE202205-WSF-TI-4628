function validatePrice() {
    var expPrice = /^[1-9]/
    var Price = document.getElementById('Price');
    if (!expPrice.exec(Price.value)) {
        alert("Only numbers accepted")
        return false;
    } else {
        return true;
    }
}

function validatequantity() {
    var expquantity = /^[1-9]/
    var quantity = document.getElementById('quantity');
    if (!expquantity.exec(quantity.value)) {
        alert("Only numbers accepted")
        return false;
    } else {
        return true;
    }
}

function computeAddition(){

    var Price = parseFloat(document.getElementById('Price').value);
    var quantity = parseInt(document.getElementById('quantity').value);
    
    var total = Price * quantity;
    console.log(total);
    

    if(total > 100)
    {
        alert("Ha tenido un gato que superan los 500$ por lo tanto tiene un descuento del 25%");
        alert("Total a pagar: " + total - total*0.25);
    }
    else
    {
        alert("El total a pagar es: " + total);
    }

    

}