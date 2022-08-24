function IVA(){
	var addend1 = parseFloat(document.getElementById('price1').value);
	var addend2 = parseFloat(document.getElementById('price2').value);
	var addend3 = parseFloat(document.getElementById('price3').value);
	var addend4 = parseFloat(document.getElementById('price4').value);
	var addend5 = parseFloat(document.getElementById('price5').value);
	var sum = addend1 + addend2 + addend3 + addend4 + addend5;
	var iva = sum*0.12;
	alert("THE IVA OF THE TOTAL PRODUCTS IS " + iva );
}

