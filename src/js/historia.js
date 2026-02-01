// historia.js – 9 de ene de 2026
//
// Vales Corp
//
// Para mini historia de inicio porque no funciono junto a funciones.js >:c.
$(document).ready(function (){
    // Todas las escenas ocultas por defecto
    if ($('#escena_uno').hasClass('oculto') && $('#cdhb1').hasClass('oculto')) {
        $('#escena_uno').hide();
        $('#cdhb1').hide();
    }
    if ($('#escena_dos_computadora').hasClass('oculto') && $('#cdhb2').hasClass('oculto')) {
        $('#escena_dos_computadora').hide();
        $('#cdhb2').hide();
    }
    if ($('#escena_dos_fono').hasClass('oculto') && $('#cdhb2').hasClass('oculto')) {
        $('#escena_dos_fono').hide();
        $('#cdhb2').hide();
    }
    if ($('#escena_tres').hasClass('oculto') && $('#cdhb3').hasClass('oculto')) {
        $('#escena_tres').hide();
        $('#cdhb3').hide();
    }
    if ($('#escena_cuatro').hasClass('oculto')) {
        $('#escena_cuatro').hide();
    }

    // Para empezar a desocultar las historias y desoculta escena 1
    $(document).ready(function() {
        $('#cdbtn_principal_computadora').click(function(e) {
            e.preventDefault(); // Evita acciones predeterminadas
            // Recorrido suave hasta el elemento con id historia
            $('html, body').animate({
                scrollTop: $('#historia').offset().top
            }, 2000);
            $('#escena_uno').show(3000);
            $('#cdhb1').show(3000);
        });
        $('#cdbtn_principal_fono').click(function(e) {
            e.preventDefault(); // Evita acciones predeterminadas
            // Recorrido suave hasta el elemento con id historia
            $('html, body').animate({
                scrollTop: $('#historia').offset().top
            }, 2000);
            $('#escena_uno').show(3000);
            $('#cdhb1').show(3000);
        });
        // Muestra escena 2
        $('#cdhb1').click(function(e) {
            e.preventDefault(); // Evita acciones predeterminadas
            $('#escena_dos_computadora').show(3000);
            $('#escena_dos_fono').show(3000);
            $('#cdhb2').show(3000);
            // Recorrido suave hasta el elemento con id historia
            $('html, body').animate({
                scrollTop: $('#separador_escena_uno').offset().top
            }, 3000);
        });
        // Muestra escena 3
        $('#cdhb2').click(function(e) {
            e.preventDefault(); // Evita acciones predeterminadas
            $('#escena_tres').show(3000);
            $('#cdhb3').show(3000);
            // Recorrido suave hasta el elemento con id historia
            $('html, body').animate({
                scrollTop: $('#separador_escena_dos').offset().top
            }, 3000);
        });
        // Muestra escena 4
        $('#cdhb3').click(function(e) {
            e.preventDefault(); // Evita acciones predeterminadas
            $('#escena_cuatro').show(3000);
            // Recorrido suave hasta el elemento con id historia
            $('html, body').animate({
                scrollTop: $('#separador_escena_tres').offset().top
            }, 3000);
        });
    });
});
