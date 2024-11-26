let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');

function showNextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Automatyczne przesuwanie co 5 sekund
setInterval(showNextSlide, 5000);
