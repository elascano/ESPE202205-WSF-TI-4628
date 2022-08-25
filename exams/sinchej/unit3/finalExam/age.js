<script>
        function calcularVenc() {
            let fechaInicialElemento = document.getElementById("fecha_ini");
            let fechaInicial = new Date(fechaInicialElemento.value);
            let fechaFinal = fechaInicial;
            var meses = document.getElementById("fecha_vencimiento").value;
            let mes = fechaInicial.getMonth() * 1.0 + 1 + meses * 1.0;

            while(mes > 11){
                let dia = fechaInicial.getDate();
                let year = fechaInicial.getFullYear() *1.0 + 1;
                mes = mes - 12;
                fechaFinal= new Date(year,mes,dia);
            }

            var fechaFin = fechaFinal.getDate() + "/" + mes + "/" + fechaFinal.getFullYear();
            fecha_finElemento = document.getElementById("fecha_fin");
            fecha_finElemento.innerHTML = fechaFin;
            alert("La fecha fin de contrato es " + fechaFin);
        }
    </script>