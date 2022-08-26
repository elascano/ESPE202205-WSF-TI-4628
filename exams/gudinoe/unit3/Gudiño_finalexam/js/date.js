function calcular(){
	var fechaini = new Date(document.getElementById('dateini').value);
	var fechafin = new Date(document.getElementById('datefin').value);
	var diasdif= fechafin.getTime()-fechaini.getTime();
	var contdias = Math.round(diasdif/(1000*60*60*24));
	alert("dias transcurridos" contdias);
}