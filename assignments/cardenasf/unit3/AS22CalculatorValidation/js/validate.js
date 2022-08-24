// JavaScript Document
var expressions={
	serial: /^[^FfDd][a-zA-Z]{2}[0-9]{4}$/,
	onlyLetters: /^[a-zA-Z\s-_\d]{1,30}$/,
	model:/^[a-zA-Z\s.-\d]{1,10}$/
}

function computeAddition(){
	var addend1 = parseFloat(document.getElementById('addend1').value);
	var addend2 = parseFloat(document.getElementById('addend2').value);
	var sum = addend1 + addend2;
	alert("The addition of " + addend1 + "+" + addend2 + " is --> " + sum);
}

function validateaddend1(){
	var expRegName=/^[^a-zA-ZÑÁáÉéÍíÓóÚúÜü\s][0-9]+$/;
	var addend1Name=document.getElementById("addend1");
	if(!expRegName.exec(addend1Name.value)){
	   alert("Only write numbers¡¡");
		return false;
	}else{
		return true;
	}
}

function validateSerial(){
	var expRegNum=/^[^a-zA-ZÑÁáÉéÍíÓóÚúÜü\s][0-9]+$/;
	var addend2Num= document.getElementById("addend2");
	if(!expRegNum.exec(addend2Num.value)){
	   alert("Only write numbers!!");
	   return false;	
	}else{
		return true;
	}
}

