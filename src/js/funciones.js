// funciones.js – 28 de nov de 2025
//
// Vales Corp
//
// Para funciones de página, van específicamente funciones, disparadores, etc.

$(document).ready(function() {
    const $slideshow = $('.slideshow');
    const $slides = $slideshow.find('.slide');
    const slideCount = $slides.length;
    let currentIndex = 0;

    // Función para mostrar un slide
    function showSlide(index) {
        $slides.removeClass('active');
        $slides.eq(index).addClass('active');
    }

    // Siguiente slide
    $('.next').click(function() {
        currentIndex = (currentIndex + 1) % slideCount;
        showSlide(currentIndex);
    });

    // Slide anterior
    $('.prev').click(function() {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        showSlide(currentIndex);
    });

    // Avance automático (cada 3 segundos)
    setInterval(function() {
        $('.next').trigger('click');
    }, $slideshow.data('interval') || 3000);
});
