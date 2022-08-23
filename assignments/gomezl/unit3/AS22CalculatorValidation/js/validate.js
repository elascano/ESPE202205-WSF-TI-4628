// JavaScript Document
var expressions={
	serial: /^[^FfDd][a-zA-Z]{2}[0-9]{4}$/,
	onlyLetters: /^[a-zA-Z\s-_\d]{1,30}$/,
	model:/^[a-zA-Z\s.-\d]{1,10}$/
}

function computeAddition(){
	var value1 = parseFloat(document.getElementById('value1').value);
	var value2 = parseFloat(document.getElementById('value2').value);
	var sum = value1 + value2;
	alert("The addition of " + value1 + "+" + value2 + " is --> " + sum);
}

function validateaddend1(){
	var expRegName=/^[^a-zA-ZÑÁáÉéÍíÓóÚúÜü\s][0-9]+$/;
	var value1Name=document.getElementById("value1");
	if(!expRegName.exec(value1Name.value)){
	   alert("Only write numbers¡¡");
		return false;
	}else{
		return true;
	}
}

function validateSerial(){
	var expRegNum=/^[^a-zA-ZÑÁáÉéÍíÓóÚúÜü\s][0-9]+$/;
	var value2Num= document.getElementById("value2");
	if(!expRegNum.exec(value2Num.value)){
	   alert("Only write numbers!!");
	   return false;	
	}else{
		return true;
	}
}