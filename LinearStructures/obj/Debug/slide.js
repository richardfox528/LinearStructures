let currentSlide = 0;
const sliders = document.querySelectorAll(".slider");

const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

function showSlide(index) {
  sliders.forEach((slider, i) => {
    if (i === index) {
      slider.classList.add("active");
    } else {
      slider.classList.remove("active");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % sliders.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + sliders.length) % sliders.length;
  showSlide(currentSlide);
}

// Asigna los controladores de eventos a los botones
nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

setInterval(nextSlide, 5000);
