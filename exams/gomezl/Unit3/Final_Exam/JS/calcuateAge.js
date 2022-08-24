function calculateAge(daybirth, monthbirth, yearbirth) {
    var daybirth = document.getElementById("day").value;
    var monthbirth = document.getElementById("month").value;
    var yearbirth = document.getElementById("year").value;
    var exit2 = document.getElementById("exit");

    this.daybirth = daybirth;
    this.monthbirth = monthbirth;
    this.yearbirth = yearbirth;

    this.edad = function edad() {
        var res = 0;
        var objeto = new Date();
        var dia = objeto.getDate();
        var mes = objeto.getMonth() + 1;
        var hoy = objeto.getFullYear();

        if (mes < this.monthbirth || (mes == this.monthbirth && dia < this.dia)) {
            return res = parseInt(hoy - this.yearbirth) - 1;
        }
        else {
            return res = parseInt(hoy - this.yearbirth);
        }
    };
    exit2.innerHTML = "Age: " + this.edad() + ".";
}