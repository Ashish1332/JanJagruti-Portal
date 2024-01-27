// Add this code for the menu button functionality
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-btn");
  const menu = document.querySelector(".menu");

  menuBtn.addEventListener("click", function () {
    menu.classList.toggle("show");
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      menu.classList.remove("show");
    }
  });
});

// Add this function to close the menu
function closeMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.remove("show");
}


let currentBanner = 0;
const banners = document.querySelectorAll('.banner-slider img');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

function showBanner(index) {
  banners.forEach((banner, i) => {
    if (i === index) {
      banner.classList.remove('inactive');
      banner.classList.add('active');
    } else {
      banner.classList.remove('active');
      banner.classList.add('inactive');
    }
  });
}

function nextBanner() {
  currentBanner = (currentBanner + 1) % banners.length;
  showBanner(currentBanner);
}

function prevBanner() {
  currentBanner = (currentBanner - 1 + banners.length) % banners.length;
  showBanner(currentBanner);
}

nextBtn.addEventListener('click', nextBanner);
prevBtn.addEventListener('click', prevBanner);

// Get the slides and the arrows
var slides = document.getElementsByClassName("slide");
var arrowLeft = document.getElementsByClassName("arrow-left")[0];
var arrowRight = document.getElementsByClassName("arrow-right")[0];

// Set the current slide index
var currentSlide = 0;

// Show the first slide
slides[currentSlide].style.opacity = 1;

// Define a function to show the next slide
function nextSlide() {
  // Hide the current slide
  slides[currentSlide].style.opacity = 0;
  // Increment the current slide index
  currentSlide++;
  // If the current slide index is equal to the number of slides, reset it to 0
  if (currentSlide == slides.length) {
    currentSlide = 0;
  }
  // Show the next slide
  slides[currentSlide].style.opacity = 1;
}

// Define a function to show the previous slide
function prevSlide() {
  // Hide the current slide
  slides[currentSlide].style.opacity = 0;
  // Decrement the current slide index
  currentSlide--;
  // If the current slide index is negative, set it to the last slide index
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  // Show the previous slide
  slides[currentSlide].style.opacity = 1;
}

// Add event listeners to the arrows
arrowLeft.addEventListener("click", prevSlide);
arrowRight.addEventListener("click", nextSlide);

// Set an interval to change the slide automatically every 3 seconds
setInterval(nextSlide, 3000);
