// menu.js – 14 de enero de 2025
//
// Vales Corp
//
// Para menú de la página, acciones de menú.

$(document).ready(function () {
  // Para menú cortina móvil
  // Oculta la cortina mediante una clase, se usa una clase para manejarlo más fácil
  if ($("#cortina_movil").hasClass("insanus")) {
    $("#cortina_movil").hide(); // Clase muestra 'ultio'
  }
  if ($("#cortina_musica").hasClass("proditio")) {
    $("#cortina_musica").hide(); // Clase muestra 'miserocordiaque'
  }
  if ($("#cortina_contactos").hasClass("sexy")) {
    $("#cortina_contactos").hide(); // Clase muestra 'death'
  }
  if ($("#cortina_eventos_pasados").hasClass("pornographic")) {
    $("#cortina_eventos_pasados").hide(); // Clase muestra 'messiah'
  }
  if ($("#cortina_proximos_eventos").hasClass("allTheLove")) {
    $("#cortina_proximos_eventos").hide(); // Clase muestra 'allTheHate'
  }
  if ($("#cortina_redes_sociales").hasClass("theRootOfAll")) {
    $("#cortina_redes_sociales").hide(); // Clase muestra 'evilution'
  }
  if ($("#cortina_tienda").hasClass("evil")) {
    $("#cortina_redes_sociales").hide(); // Clase muestra 'becomesRule'
  }

  // Botón de acción del menú móvil, básicamente evalua si la cortina tiene la clase para mostrar u ocultar
  // si es asi, cambia el ícono del menú y muestra la cortina, caso contrario, cambia la clase y el mismo proceso
  $("#boton_menu_movil").click(function () {
    if ($("#cortina_movil").hasClass("insanus")) {
      $("#cortina_movil")
        .removeClass("insanus")
        .addClass("ultio")
        .slideToggle(150);
      $("#span_menu").text("close");
      $("#menu_christian_death_logo").hide();
      $("#buscar").hide();
    } else if ($("#cortina_movil").hasClass("ultio")) {
      $("#cortina_movil")
        .removeClass("ultio")
        .addClass("insanus")
        .slideToggle(150);
      $("#span_menu").text("menu");
      $("#menu_christian_death_logo").show();
      $("#buscar").show();
    }
  });

  var tiempoEspera; // variable para guardar tiempo de espera de apertura del menú
  var estaEncima = false;

  // Función cuando entra el cursor sobre los elementos con id
  // Entra cursor sobre elemento con id musica
  // En cada mouse enter después de mostrar la cortina respectiva, se deben ocultar todas las demás por defecto.
  //
  // Muestrar cortina música y oculta las demás
  $("#music").mouseenter(function () {
    clearTimeout(tiempoEspera); // pone el tiempo de espera
    estaEncima = true; // detecta que el cursor esta encima de la función
    tiempoEspera = setTimeout(function () {
      if (estaEncima) {
        if ($("#cortina_musica").hasClass("proditio")) {
          // Evalúa si tiene la clase proditio
          $("#cortina_musica")
            .removeClass("proditio") // Remueve clase proditio de cortina_musica
            .addClass("misericordiaque") // agrega clase misericordiaque de cortina_musica
            .slideDown(400); // muestra cortina_musica
          $("#cortina_contactos")
            .removeClass("death") // remueve clase death de cortina_contactos
            .addClass("sexy") // agrega clase sexy a cortina_contactos
            .slideUp(400); // oculta cortina_contactos
          $("#cortina_eventos_pasados")
            .removeClass("messiah") // remueve clase messiah de eventos pasados
            .addClass("pornographic") // agrega clase pornographic a eventos pasados
            .slideUp(400); // oculta cortina_contactos
          $("#cortina_proximos_eventos")
            .removeClass("allTheHate") // remueve clase allTheHate de proximos eventos
            .addClass("allTheLove") // agrega la clase allTheLove de proximos eventos
            .slideUp(400); // oculta cortina_contactos
          $("#cortina_redes")
            .removeClass("evilution") // remueve clase evilution de redes
            .addClass("theRootOfAll") // agrega clase the rootOfAll de redes
            .slideUp(400); // oculta cortina_contactos
          $("#cortina_tienda")
            .removeClass("becomesRule") // remueve clase becomesRule de redes
            .addClass("evil") // agrega clase the evil de redes
            .slideUp(400); // oculta cortina_tienda
        }
      }
    }, 350); // 300 milisegundos de espera para la función
  });
  // Ocultar cortina música
  $("#cortina_musica").mouseleave(function () {
    if ($("#cortina_musica").hasClass("misericordiaque")) {
      // Evalúa si tiene la clase miserocordiaque
      $("#cortina_musica")
        .removeClass("misericordiaque") // Remueve clase miserocordiaque de cortina_musica
        .addClass("proditio") // agrega clase proditio de cortina_musica
        .slideUp(400); // oculta cortina_musica
    }
  });

  // Muestra cortina contactos
  $("#contacts").mouseenter(function () {
    clearTimeout(tiempoEspera); // pone el tiempo de espera
    estaEncima = true; // detecta que el cursor esta encima de la función
    tiempoEspera = setTimeout(function () {
      if (estaEncima) {
        if ($("#cortina_contactos").hasClass("sexy")) {
          // Evalúa si tiene la clase sexy
          $("#cortina_contactos")
            .removeClass("sexy") // Remueve clase sexy de cortina_contactos
            .addClass("death") // Agrega clase death a cortina_contactos
            .slideDown(400); // Muestra cortina_contactos
          $("#cortina_musica")
            .removeClass("misericordiaque") // Remueve clase misericordiaque de cortina_musica
            .addClass("proditio") // Agrega clase proditio a cortina_musica
            .slideUp(400); // Oculta cortina_musica
          $("#cortina_eventos_pasados")
            .removeClass("messiah") // remueve clase messiah de eventos pasados
            .addClass("pornographic") // agrega clase pornographic a eventos pasados
            .slideUp(400); // oculta cortina_contactos
          $("#cortina_proximos_eventos")
            .removeClass("allTheHate") // remueve clase allTheHate de proximos eventos
            .addClass("allTheLove") // agrega clase allTheLove de proximos eventos
            .slideUp(400); // oculta cortina_contactos
          $("#cortina_redes_sociales")
            .removeClass("evilution") // remueve clase evlution
            .addClass("theRootOfAll") // agrega clase theRootOfAll
            .slideUp(400); // oculta cortina_contactos
          $("#cortina_tienda")
            .removeClass("becomesRule") // remueve clase becomesRule de redes
            .addClass("evil") // agrega clase the evil de redes
            .slideUp(400); // oculta cortina_tienda
        }
      }
    }, 350);
  });
  // Ocultar cortina contactos
  $("#cortina_contactos").mouseleave(function () {
    if ($("#cortina_contactos").hasClass("death")) {
      // Evalúa si tiene la clase death
      $("#cortina_contactos")
        .removeClass("death") // Remueve clase death de cortina_contactos
        .addClass("sexy") // Agrega clase sexy a cortina_contactos
        .slideUp(400); // Oculta cortina_contactos
    }
  });
  // Muestra cortina eventos pasados
  $("#past").mouseenter(function () {
    clearTimeout(tiempoEspera); // pone el tiempo de espera
    estaEncima = true; // detecta que el cursor esta encima de la función
    tiempoEspera = setTimeout(function () {
      if (estaEncima) {
        if ($("#cortina_eventos_pasados").hasClass("pornographic")) {
          // Evalúa si tiene la clase pornographic
          $("#cortina_eventos_pasados")
            .removeClass("pornographic") // Remueve clase sexy de cortina_contactos
            .addClass("messiah") // Agrega clase death a cortina_contactos
            .slideDown(400); // Muestra cortina_contactos
          $("#cortina_musica")
            .removeClass("misericordiaque") // Remueve clase misericordiaque de cortina_musica
            .addClass("proditio") // Agrega clase proditio a cortina_musica
            .slideUp(400); // Oculta cortina_musica
          $("#cortina_contactos")
            .removeClass("death") // remueve clase death de cortina_contactos
            .addClass("sexy") // agrega clase sexy a cortina_contactos
            .slideUp(400); // oculta cortina_contactos
          $("#cortina_proximos_eventos")
            .removeClass("allTheHate") // remueve clase death de cortina_contactos
            .addClass("allTheLove") // agrega clase sexy a cortina_contactos
            .slideUp(400); // oculta cortina_contactos
          $("#cortina_redes_sociales")
            .removeClass("evilution") // remueve clase death de cortina_contactos
            .addClass("theRootOfAll") // agrega clase sexy a cortina_contactos
            .slideUp(400); // oculta cortina_contactos
          $("#cortina_tienda")
            .removeClass("becomesRule") // remueve clase becomesRule de redes
            .addClass("evil") // agrega clase the evil de redes
            .slideUp(400); // oculta cortina_tienda
        }
      }
    }, 350);
  });
  // Ocultar cortina eventos pasados
  $("#cortina_eventos_pasados").mouseleave(function () {
    if ($("#cortina_eventos_pasados").hasClass("messiah")) {
      // Evalúa si tiene la clase death
      $("#cortina_eventos_pasados").removeClass("messiah"); // Remueve clase death de cortina_contactos
      $("#cortina_eventos_pasados").addClass("pornographic"); // Agrega clase sexy a cortina_contactos
      $("#cortina_eventos_pasados").slideUp(400); // Oculta cortina_contactos
    }
  });

  // Muestra cortina proximos eventos
  $("#upcoming").mouseenter(function () {
    clearTimeout(tiempoEspera); // pone el tiempo de espera
    estaEncima = true; // detecta que el cursor esta encima de la función
    tiempoEspera = setTimeout(function () {
      if (estaEncima) {
        if ($("#cortina_proximos_eventos").hasClass("allTheLove")) {
          // Evalúa si tiene la clase pornographic
          $("#cortina_proximos_eventos")
            .removeClass("allTheLove") // Remueve clase sexy de cortina_contactos
            .addClass("allTheHate") // Agrega clase death a cortina_contactos
            .slideDown(400); // Muestra cortina_contactos
          $("#cortina_musica")
            .removeClass("misericordiaque") // Remueve clase misericordiaque de cortina_musica
            .addClass("proditio") // Agrega clase proditio a cortina_musica
            .slideUp(400); // Oculta cortina_musica
          $("#cortina_contactos")
            .removeClass("death") // remueve clase death de cortina_contactos
            .addClass("sexy") // agrega clase sexy a cortina_contactos
            .slideUp(400); // oculta cortina_contactos
          $("#cortina_eventos_pasados")
            .removeClass("messiah") // remueve clase messiah de eventos pasados
            .addClass("pornographic") // agrega clase pornographic a eventos pasados
            .slideUp(400); // oculta cortina eventos pasados
          $("#cortina_redes_sociales")
            .removeClass("evilution") // remueve clase evilution de redes sociales
            .addClass("theRootOfAll") // agrega clase theRootOfAll a redes sociales
            .slideUp(400); // oculta cortina redes
          $("#cortina_tienda")
            .removeClass("becomesRule") // remueve clase becomesRule de redes
            .addClass("evil") // agrega clase the evil de redes
            .slideUp(400); // oculta cortina_tienda
        }
      }
    }, 350);
  });
  // Ocultar cortina proximos eventos
  $("#cortina_proximos_eventos").mouseleave(function () {
    if ($("#cortina_proximos_eventos").hasClass("allTheHate")) {
      // Evalúa si tiene la clase death
      $("#cortina_proximos_eventos").removeClass("allTheHate"); // Remueve clase death de cortina_contactos
      $("#cortina_proximos_eventos").addClass("allTheLove"); // Agrega clase sexy a cortina_contactos
      $("#cortina_proximos_eventos").slideUp(400); // Oculta cortina proximos eventos
    }
  });

  // Muestra cortina tienda
  $("#shop").mouseenter(function () {
    clearTimeout(tiempoEspera); // pone el tiempo de espera
    estaEncima = true; // detecta que el cursor esta encima de la función
    tiempoEspera = setTimeout(function () {
      if (estaEncima) {
        if ($("#cortina_shop").hasClass("evil")) {
          // Evalúa si tiene la clase pornographic
          $("#cortina_shop")
            .removeClass("evil") // Remueve clase sexy de cortina_contactos
            .addClass("becomesRule") // Agrega clase death a cortina_contactos
            .slideDown(400); // Muestra cortina_contactos
          $("#cortina_musica")
            .removeClass("misericordiaque") // Remueve clase misericordiaque de cortina_musica
            .addClass("proditio") // Agrega clase proditio a cortina_musica
            .slideUp(400); // Oculta cortina_musica
          $("#cortina_contactos")
            .removeClass("death") // remueve clase death de cortina_contactos
            .addClass("sexy") // agrega clase sexy a cortina_contactos
            .slideUp(400); // oculta cortina_contactos
          $("#cortina_eventos_pasados")
            .removeClass("messiah") // remueve clase death de cortina_contactos
            .addClass("pornographic") // agrega clase sexy a cortina_contactos
            .slideUp(400); // oculta cortina_contactos
          $("#cortina_proximos_eventos")
            .removeClass("allTheHate") // remueve clase death de cortina_contactos
            .addClass("allTheLove") // agrega clase sexy a cortina_contactos
            .slideUp(400); // oculta cortina_contactos
        }
      }
    }, 350);
  });
  // Ocultar cortina redes sociales
  $("#cortina_redes_sociales").mouseleave(function () {
    if ($("#cortina_redes_sociales").hasClass("evilution")) {
      // Evalúa si tiene la clase death
      $("#cortina_redes_sociales").removeClass("evilution"); // Remueve clase death de cortina_contactos
      $("#cortina_redes_sociales").addClass("theRootOfAll"); // Agrega clase sexy a cortina_contactos
      $("#cortina_redes_sociales").slideUp(400); // Oculta cortina_contactos
    }
  });

  // Muestra cortina redes sociales
  $("#socialnetworks").mouseenter(function () {
    clearTimeout(tiempoEspera); // pone el tiempo de espera
    estaEncima = true; // detecta que el cursor esta encima de la función
    tiempoEspera = setTimeout(function () {
      if (estaEncima) {
        if ($("#cortina_redes_sociales").hasClass("theRootOfAll")) {
          // Evalúa si tiene la clase pornographic
          $("#cortina_redes_sociales")
            .removeClass("theRootOfAll") // Remueve clase sexy de cortina_contactos
            .addClass("evilution") // Agrega clase death a cortina_contactos
            .slideDown(400); // Muestra cortina_contactos
          $("#cortina_musica")
            .removeClass("misericordiaque") // Remueve clase misericordiaque de cortina_musica
            .addClass("proditio") // Agrega clase proditio a cortina_musica
            .slideUp(400); // Oculta cortina_musica
          $("#cortina_contactos")
            .removeClass("death") // remueve clase death de cortina_contactos
            .addClass("sexy") // agrega clase sexy a cortina_contactos
            .slideUp(400); // oculta cortina_contactos
          $("#cortina_eventos_pasados")
            .removeClass("messiah") // remueve clase death de cortina_contactos
            .addClass("pornographic") // agrega clase sexy a cortina_contactos
            .slideUp(400); // oculta cortina_contactos
          $("#cortina_proximos_eventos")
            .removeClass("allTheHate") // remueve clase death de cortina_contactos
            .addClass("allTheLove") // agrega clase sexy a cortina_contactos
            .slideUp(400); // oculta cortina_contactos
          $("#cortina_tienda")
            .removeClass("becomesRule") // remueve clase becomesRule de redes
            .addClass("evil") // agrega clase the evil de redes
            .slideUp(400); // oculta cortina_tienda
        }
      }
    }, 350);
  });
  // Ocultar cortina redes sociales
  $("#cortina_redes_sociales").mouseleave(function () {
    if ($("#cortina_redes_sociales").hasClass("evilution")) {
      // Evalúa si tiene la clase death
      $("#cortina_redes_sociales").removeClass("evilution"); // Remueve clase death de cortina_contactos
      $("#cortina_redes_sociales").addClass("theRootOfAll"); // Agrega clase sexy a cortina_contactos
      $("#cortina_redes_sociales").slideUp(400); // Oculta cortina_contactos
    }
  });

  $("#menu").mouseleave(function () {
    estaEncima = false;
    clearTimeout(timeoutId);
  });
  // $('#menu').mouseenter(function () {
  //     if($('#music').mouseenter)
  // });
});
