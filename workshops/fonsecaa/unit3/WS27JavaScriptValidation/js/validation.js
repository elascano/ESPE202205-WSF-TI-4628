function validateBrand() {
  var letters = /^[A-Za-z]+$/;
  var brandName = document.getElementById("brand");
  if (!letters.exec(brandName.value)) {
    alert("Only letters are allowed in Brand!!");
    return true;
  } else {
    return false;
  }
}

function validateModel() {
    var letters = /^[0-9A-Z]+$/;
    var brandName = document.getElementById("brand");
    if (!letters.exec(brandName.value)) {
      alert("Only Mayus letters are allowed in Model!!");
      return true;
    } else {
      return false;
    }
  }
