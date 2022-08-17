var expressions = {
    ESPEid: /^[L]{1}[0-9]{8}$/,
    onlyLetters: /^[a-zA-Z\s_\d]{1,30}$/,
    onlyNumbers: /^[0-9]{1}$/,
}

function validateESPEid() {
    var ESPEidName = document.getElementById('ESPEid').value;
    if (!(expressions.ESPEid).test(ESPEidName)) {
        window.alert("Invalid ESPE ID!!");
    }
}

function validateTeachers() {
    var expRegName = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var TeachersName = document.getElementById("TeachersName");
    if (!expRegName.exec(TeachersName.value)) {
        alert("Only write letters.");
        return false;
    } else {
        return true;

    }
}

function validateNumbers() {
    var expRegName = /^[0123456789\s]+$/;
    var NumbersName = document.getElementById("NOSTT");
    if (!expRegName.exec(NumbersName.value)) {
        alert("Only write numbers.");
        return false;
    } else {
        return true;

    }
}
