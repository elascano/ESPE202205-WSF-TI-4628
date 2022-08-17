function validateNationality(){
    var expReguser = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    var userName = document.getElementById("nationality");
    if (!expReguser.exec(userName.value)){
        
		document.querySelector(`#mensaje-error-nationality`).classList.add('input-error-enabled');
		document.querySelector(`#Nationality`).classList.add('input-error-border');

        return false;

    } else{
        document.querySelector(`#mensaje-error-nationality`).classList.remove('input-error-enabled');
		document.querySelector(`#nationality`).classList.remove('input-error-border');
        
        return true;
    }
}

function validateFullName(){
    var expRegFullName = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    var UserFullName = document.getElementById("txtName");
    if (!expRegFullName.exec(UserFullName.value)){

		document.querySelector(`#mensaje-error-txtName`).classList.add('input-error-enabled');
		document.querySelector(`#txtName`).classList.add('input-error-border');

        return false;

    } else{

        document.querySelector(`#mensaje-error-txtName`).classList.remove('input-error-enabled');
		document.querySelector(`#txtName`).classList.remove('input-error-border');

        return true;
    }
}

function validatePassport(){
    var expRegPassport = /^.{10}$/;
    var UserPassport = document.getElementById("passport");
    if (!expRegPassport.exec(UserPassport.value)){

		document.querySelector(`#mensaje-error-passport`).classList.add('input-error-enabled');
		document.querySelector(`#passport`).classList.add('input-error-border');

        return false;

    } else{

        document.querySelector(`#mensaje-error-passport`).classList.remove('input-error-enabled');
		document.querySelector(`#passport`).classList.remove('input-error-border');
    
        return true;
    }
}