var expressions = {
  plate: /^[^FfDd][a-zA-Z]{2}[0-9]{4}$/,
  onlyLetters: /^[a-zA-Z\s_\d]{1,30}$/,
  model: /^[a-zA-Z\s.-\d]{1,10}$/,
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

function validatePlate () {
  var plateName = document.getElementById("plate").value;
  if (!(expressions.plate).test(plateName.value)) {
    window.alert("Plate is not valid !!");

    return false;
  } else {
    return true;
  }
}

function validateModel () {
  let inp = document.getElementById("model").value;
  if (!(expressions.model).test(inp)) {

    return false;
  } else {
    return true;
  }
}