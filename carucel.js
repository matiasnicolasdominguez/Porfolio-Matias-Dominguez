const carouselContainer = document.querySelector('.carousel-container');
const carouselItem = document.querySelector('.carousel-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const items = carouselItem.querySelectorAll('a, img, audio'); // selecciona los elementos dentro del carrusel
const itemsToShow = 4; // Número de elementos visibles a la vez
let currentIndex = 0;
const totalItems = items.length;

// Permite que cada carrusel funcione de forma independiente
document.querySelectorAll('.video-carousel').forEach(function(carousel) {
  const container = carousel.querySelector('.carousel-container');
  const item = container.querySelector('.carousel-item');
  // Selecciona los elementos desplazables (a, img, audio)
  const items = item.querySelectorAll('a, img, audio');
  const prevBtn = carousel.querySelector('.prev-btn');
  const nextBtn = carousel.querySelector('.next-btn');
  const itemsToShow = 1; // Número de elementos visibles a la vez
  let currentIndex = 0;
  const totalItems = items.length;

  // Actualiza la posición del carrusel según el índice actual
  function updateCarousel() {
    // Bucle circular
    if (currentIndex < 0) {
      currentIndex = Math.max(totalItems - itemsToShow, 0);
    }
    if (currentIndex > totalItems - itemsToShow) {
      currentIndex = 0;
    }
    const offset = -(currentIndex * (100 / itemsToShow));
    item.style.transform = `translateX(${offset}%)`;
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentIndex--;
      updateCarousel();
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentIndex++;
      updateCarousel();
    });
  }

  updateCarousel();
});

function toggleSidebar() {
    document.body.classList.toggle('sidebar-open');
}
document.getElementById('sidebarToggle').onclick = toggleSidebar;
