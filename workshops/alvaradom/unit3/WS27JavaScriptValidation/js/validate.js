//JavaScript Document
var expressions = {
    id: /^[L-l]{1}[0-9]{8}$/,
    onlyLetters: /^[a-zA-Z\s_\d]{1,30}$/,
    semester: /^[0-9]{2}$/
}


function validateName() {
    var expRegName = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var Name = document.getElementById("Name");
    if (!expRegName.exec(Name.value)) {
        alert("Only write letters.");
        return false;
    } else {
        return true;

    }
}

function validateId() {
    var idName = document.getElementById('id').value;
    if (!(expressions.id).test(idName)) {
        window.alert("Invalid Id!!");
    }
}

function validateSemester() {
    let inp = document.getElementById('Semester').value;
    if(!(expressions.semester).test(inp)){
        return false;
    }
}