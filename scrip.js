

const slides = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Variable para llevar la cuenta del slide actual
let currentIndex = 0;

// Función para actualizar el carrusel
function updateCarousel() {
    slides.forEach((slide, index) => {
        slide.style.display = (index === currentIndex) ? 'block' : 'none';
    });
}

// Evento para el botón "Anterior"
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    updateCarousel();
});

// Evento para el botón "Siguiente"
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
});

// Inicializa el carrusel mostrando el primer slide
updateCarousel();