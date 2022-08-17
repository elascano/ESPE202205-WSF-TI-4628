function validar() {
	var user = document.getElementById("user");
	var email = document.getElementById("email");
	var codipos = document.getElementById("codipos");
	var seleccionado = false;


	if(user.value.length == 0)
	{
      alert("Debe ingresar el Usuario");
    	user.focus();
    	return false;
	}
	if(email.value.length == 0)
	{
		alert("Por favor, ingrese su Email");
		email.focus();
		return false;
	}
	if(codipos.value.length == 0)
	{
		alert("Por favor ingrese su ID");
		codipos.focus();
		return false;
	}
	else if(codipos.value.length != 0 && isNaN(codipos.value))
	{
		alert("Por favor, ingrese solo numeros en el ID de registro");
		codipos.focus();
		return false;
	}
	
    alert("Datos de formulario enviados exitosamente.");
    document.getElementById("myForm").reset();
	  return false;
	}
