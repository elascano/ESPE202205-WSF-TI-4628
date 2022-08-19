var expressions = {
    plate: /^[A-Z]{2}[0-9]{3}[A-Z]{1}$/,
    onlyLetters: /^[a-zA-Z\s_\d]{1,30}$/,
    price: /^\d{6,10}$/,
  };
  
function validateBrand() {
    var expRegName = /^[a-zA-ZÑñÁáÉéÍíÓóÚú\s]+$/;
    var brandName = document.getElementById("brand");
    if (!expRegName.exec(brandName.value)) {
      alert("Only write letters.");
      return false;
    } else {
      return true;
    }
}

function validatePrice() {
    if(isNaN(document.getElementById('price').value)){ 
        alert("Only write numbers");
        return false; 
    } else {
        return true;
    }
}

function validatePlate() {
    var plateName = document.getElementById('plate').value;
    if(!(expressions.plate).test(plateName.value)){
        window.alert("Plate is not valid.")
        return false;
    } else{
        return true;
    }
}