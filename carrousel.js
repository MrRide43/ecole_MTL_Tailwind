let currentIndex = 0;

function showSlide(index) {
  const track = document.querySelector(".carousel-track");
  const images = document.querySelectorAll(".carousel-image");
  const totalImages = images.length;
  const maxVisible = 3;

  // Limiter l'index pour éviter de défiler trop loin
  if (index < 0) {
    currentIndex = totalImages - maxVisible;
  } else if (index > totalImages - maxVisible) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // Déplacer la piste pour montrer les images
  const offset = -currentIndex * (100 / maxVisible);
  track.style.transform = `translateX(${offset}%)`;
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

// Initialiser le carrousel
showSlide(currentIndex);
