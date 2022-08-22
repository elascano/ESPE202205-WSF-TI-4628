var expressions={
    plate: /^[a-zA-Z]{3,3}[0-9]{2}[a-zA-Z0-9]$/
}

function validatePlate(){
    var plateName=document.getElementById('txtPlate').value;
    if(!(expressions.plate).test(plateName)){
        window.alert("Invalid Plate !!!");
    }
}