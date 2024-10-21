// Función para inicializar un carrusel
function initCarousel(selector, interval) {
    // Seleccionamos el carrusel especificado
    const carousel = document.querySelector(selector);

    if (!carousel) return; // Si no se encuentra el carrusel, salimos de la función

    // Seleccionamos todas las diapositivas dentro del carrusel
    const slides = carousel.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    // Clonamos la primera y última diapositiva para crear el efecto de carrusel infinito
    const firstSlide = slides[0].cloneNode(true);
    const lastSlide = slides[totalSlides - 1].cloneNode(true);

    // Añadimos la primera diapositiva clonada al final del carrusel
    carousel.appendChild(firstSlide);
    // Añadimos la última diapositiva clonada al principio del carrusel
    carousel.insertBefore(lastSlide, slides[0]);

    // Actualizamos la lista de diapositivas para incluir las clonadas
    const updatedSlides = carousel.querySelectorAll('.carousel-item');
    const updatedTotalSlides = updatedSlides.length;

    let index = 1; // Empezamos mostrando la segunda diapositiva
    let offset = -index * 100; // Calculamos el desplazamiento inicial

    // Función para mover el carrusel a la siguiente diapositiva
    function moveCarousel() {
        // Si hemos llegado a la última diapositiva clonada, reiniciamos al segundo slide
        if (index >= updatedTotalSlides - 1) {
            index = 1; // Volvemos a la segunda diapositiva
            carousel.style.transition = 'none'; // Desactivamos la transición para hacer un salto instantáneo
            carousel.style.transform = `translateX(${index * -100}%)`; // Posicionamos el carrusel
            // Volvemos a activar la transición después de un breve retraso
            setTimeout(() => {
                carousel.style.transition = 'transform 0.5s ease-in-out'; // Reactivamos la transición
                moveCarousel(); // Continuamos moviendo el carrusel
            }, 50);
        } else {
            // Si no estamos en la última diapositiva, avanzamos al siguiente slide
            index++;
            offset = -index * 100; // Actualizamos el desplazamiento
            carousel.style.transform = `translateX(${offset}%)`; // Aplicamos el desplazamiento
        }
    }

    // Establecemos un intervalo para mover el carrusel a la siguiente diapositiva
    setInterval(moveCarousel, interval);
}

// Esperamos a que el contenido de la página se haya cargado completamente
document.addEventListener('DOMContentLoaded', function () {
    const interval = 3000; // Intervalo de cambio entre slides en milisegundos (3 segundos)

    // Inicializamos los carruseles
    initCarousel('#carousel-local', interval);
    initCarousel('#carousel-nacional', interval);
    initCarousel('#carousel-internacional', interval);
});
