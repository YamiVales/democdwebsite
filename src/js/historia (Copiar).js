// historia.js – 9 de ene de 2026
//
// Vales Corp
//
// Para mini historia de inicio porque no funciono junto a funciones.js >:c.
$(document).ready(function (){
    // Todas las escenas ocultas por defecto
    if ($('#escena_uno').hasClass('oculto')) {
        $('#escena_uno').hide();
    }
    if ($('#escena_dos').hasClass('oculto')) {
        $('#escena_dos').hide();
    }
    if ($('#escena_tres').hasClass('oculto')) {
        $('#escena_tres').hide();
    }
    if ($('#escena_cuatro').hasClass('oculto')) {
        $('#escena_cuatro').hide();
    }

    // Para el botón de christian
    $('#christian_death_button').on('click', function(e) {
        e.preventDefault();  // 1. Evita acciones predefinidas (como recargar)

        var destino = $('#escena_uno');  // 2. Elemento a mostrar
        var posicion;  // 3. Variable para la posición (la definimos después)

        // 4. Mostrar elemento Y esperar a que termine (callback)
        destino.show(1900, function() {
            // 5. Solo aquí calculamos la posición (después de que aparezca)
            posicion = destino.offset().top;  // -30px de margen superior

            // 6. Animación de recorrido suave
            $('html, body').stop().animate(
                { scrollTop: posicion },
                {
                    duration: 1900,  // Tiempo: 1.2 segundos
                    easing: 'swing',  // Efecto de aceleración
                    complete: function() {
                        console.log('Llegamos a #escena_uno con margen');
                    }
                }
            );
        });
      // console.log('Botón clickeado: iniciando animación');
      // $('#christian_death_buttondos').on('click', function (e) {
      //       $('#escena_dos').removeClass('oculto').show(1900);

      // });

    });
    // Muestra escena uno después de hacer clic al christian_death_button
    // $('#escena_uno')
    //     .visibility({
    //         once: false,
            // update size when new content loads
    //         observeChanges: true,
            // load content on bottom edge visible
    //         onOnScreen: function(topPassed) {
    //             $('#escena_uno').show(2200);
    //         },
    //     })
    // ;

    // Muestra escena dos después de escena uno
    // $('#escena_dos')
    //     .visibility({
    //         onOnScreen: function(topPassed) {
    //             $('#escena_dos').show(2200);
    //         },
    //     })
    // ;
});


