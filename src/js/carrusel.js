// carrusel.js – 2 de dic de 2025
//
// Vales Corp
//
// Función del carrusel de fotos.

if(document.querySelector('#container-slider')){
    setInterval('fntExecuteSlide("next")',5000);
}
// convierte la lista a slider
if(document.querySelector('.listslider')){
    let link = document.querySelectorAll(".listslider li a");
    link.forEach(function(link) {
        link.addEventListener('click', function(e){
            e.preventDefault();
            let item = this.getAttribute('itlist');
            let arrItem = item.split("_");
            fntExecuteSlide(arrItem[1]);
            return false;
        });
    });
}

function fntExecuteSlide(side) {
    // Seleccionamos TODOS los carruseles
    const allCarruseles = document.querySelectorAll('.slider');

    allCarruseles.forEach(carrusel => {
        // Lógica para CADA carrusel
        const elements = carrusel.querySelectorAll('li');
        let curElement, nextElement;

        // Buscamos el slide actual (opacity == 1)
        for (let i = 0; i < elements.length; i++) {
            if (elements[i].style.opacity == 1) {
                curElement = i;
                break;
            }
        }

        // Calculamos el siguiente slide
        if (side == 'prev' || side == 'next') {
            nextElement = (side == "prev")
            ? (curElement == 0 ? elements.length - 1 : curElement - 1)
            : (curElement == elements.length - 1 ? 0 : curElement + 1);
        } else {
            nextElement = side;
            side = (curElement > nextElement) ? 'prev' : 'next';
        }

        // Actualizamos clases y estilos (solo para este carrusel)
        const elementSel = carrusel.closest('.container') // O el contenedor adecuado
        ?.querySelector('.listslider')
        ?.querySelectorAll('a');

        if (elementSel) {
            elementSel[curElement].classList.remove("item-select-slid");
            elementSel[nextElement].classList.add("item-select-slid");
        }

        elements[curElement].style.opacity = 0;
        elements[curElement].style.zIndex = 0;
        elements[nextElement].style.opacity = 1;
        elements[nextElement].style.zIndex = 1;
  });
}


