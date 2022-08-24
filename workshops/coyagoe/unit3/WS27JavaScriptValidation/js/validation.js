var expressions={
    personName: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/,
    passport: 'TRWAGMYFPDXBNJZSQVHLCKET',
    countryName: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/
}

function validateName(){
    var expRegName= /^[a-zA-ZÑñÁáÉéÍíÓóÚú\s]+$/;
    var personName = document.getElementById("name");
    if(!expRegName.exec(personName.value)){
        alert("Only write letters.");
        return false;
    }else{
        return true;
    }
}

function validatePassport(){
    var nifRexp = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]$/i;
    var nieRexp = /^[XYZ][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKET]$/i;
    var str = value.toString().toUpperCase();

    var passportName=document.getElementById('passport').value;
    if (!nifRexp.test(str) && !nieRexp.test(str)) return false;
  
    var nie = str
        .replace(/^[X]/, '0')
        .replace(/^[Y]/, '1')
        .replace(/^[Z]/, '2');

      
    var letter = str.substr(-1);
    var charIndex = parseInt(nie.substr(0, 8)) % 23;
  
    if (validChars.charAt(charIndex) === letter) return true;
  
    return false;
}

function validateCountry(){
    var expRegCountry= /^[a-zA-ZÑñÁáÉéÍíÓóÚú\s]+$/;
    var countryName = document.getElementById("country");
    if(!expRegCountry.exec(countryName.value)){
        alert("Only write letters.");
        return false;
    }else{
        return true;
    }
}
