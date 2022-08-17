var expressions = {
	full_name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	phone: /^\d{7,10}$/, // 7 a 10 numeros.
  age: /^\d{1,3}$/, // 1 a 3 numeros.
  serial: /^[A-Z-0-9]{11}$/, // Deben ser 11 digitos 
};

function validateBrand() {
  var expRegName = /^[a-zA-ZÑñÁáÉéÍíÓóÚú\s]+$/;
  var brand = document.getElementById("brand");
    if (!expRegName.exec(brand.value)) {
      alert("Only write letters.");
      return false;
  } else {
      return true;
  }
}

//function validateEmail() {
  //var emailName = document.getElementById('email').value;
  //if(!(expressions.email).test(emailName)){
    //alert("Invalid email.");
    //return false;
 // } else {
   // return true;
 // }
//}

function validateModel() {
  if(isNaN(document.getElementById('model').value)){ 
      alert("Only write numbers");
      return false; 
  } else {
      return true;
  }
}

function validateAge() {
  var ageName = document.getElementById('age').value;
  if(!(expressions.age).test(ageName)){
    alert("Only three digits");
    return false;
  } else {
    return true;
  }  
}

function validatePassword() {
  var passwordName = document.getElementById('password').value;
  if(!(expressions.password).test(passwordName)){
    alert("Only 12 digits");
    return false;
  } else {
    return true;
  }  
}
function validateSerial(){
  var serialob= document.getElementById('serial').value;
  if(!(expressions.serial).test(serialob)){
    alert("Minimo 11 digitos y letras solo en Mayusculas");
    return false;
  }
  else{
    return true;
  }
}
