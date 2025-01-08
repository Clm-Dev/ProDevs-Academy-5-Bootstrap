$(document).ready(function () {
    console.log('JQUERY ESTA FUNCIONANDO');

    $("#envio").click(function () {
        let mail = $("#mail").val().trim();
        let texto = $("#texto").val().trim();
        let seleccion = $("#seleccion").val();

        //console.log(seleccion);
        let hasError = false;

        if (mail == "") {
            $("#error-mail").show();
            hasError = true;
        } else {
            $("#error-mail").hide();
        }
        if (texto == "") {
            $("#error-texto").show();
            hasError = true;
        } else {
            $("#error-texto").hide();
        }

        if (seleccion == "") {
            $("#error-seleccion").show()
            hasError = true;
        } else {
            $("#error-seleccion").hide();
        }



        if (!hasError) {
            let datos = {
                mail: mail,
                mensaje: texto,
                carrera: seleccion
            }

            console.log(datos)
            alert("Datos enviados")
            $("#mail").val("");
            $("#texto").val("")


        }


    })
})