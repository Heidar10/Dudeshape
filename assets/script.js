const menuToggle = document.querySelector(".menu-toggle");
const dropdownMenu = document.querySelector(".nav-flex");

menuToggle.addEventListener("click", () => {
  dropdownMenu.classList.toggle("active");
});

///////////////

function initReviewSlider() {
  const slider = document.querySelector(".slider-reviews");
  const reviewer = document.querySelectorAll(".reviewer");
  const prevButtons = document.querySelectorAll(
    '.arrow-link img[src*="arrow-left"]'
  );
  const nextButtons = document.querySelectorAll(
    '.arrow-link img[src*="arrow-right"]'
  );

  let currentIndex = 0;

  function showSlide(index) {
    reviewer.forEach((slide, i) => {
      slide.style.display = i === index ? "flex" : "none";
    });
  }

  showSlide(currentIndex);

  prevButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + reviewer.length) % reviewer.length;
      showSlide(currentIndex);
    });
  });

  nextButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % reviewer.length;
      showSlide(currentIndex);
    });
  });
}

function initCosmeticSlider() {
  const slider = document.querySelector(".slider-cosmetics");
  const prevBtn = document.querySelector(".btn-prev");
  const nextBtn = document.querySelector(".btn-next");

  const images = [
    "./assets/img/cosmetic-products/black-bottles.png",
    "./assets/img/cosmetic-products/pink-bottles.png",
  ];

  let currentIndex = 0;

  const changeSlide = (index) => {
    slider.style.backgroundImage = `url(${images[index]})`;
  };

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    changeSlide(currentIndex);
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    changeSlide(currentIndex);
  });

  changeSlide(currentIndex);
}

document.addEventListener("DOMContentLoaded", () => {
  initReviewSlider();
  initCosmeticSlider();
});
