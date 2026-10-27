
document.addEventListener("DOMContentLoaded", function () {
  // Check that Swiper is loaded
  if (typeof Swiper === "undefined") {
    console.error("Swiper.js is not loaded. Check your CDN script.");
    return;
  }

  // Initialize hero banner slider
  const heroElement = document.querySelector(".heroSwiper");

  if (heroElement) {
    const heroSwiper = new Swiper(".heroSwiper", {
      loop: true,
      speed: 800,
      effect: "slide",

      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },

      pagination: {
        el: ".heroSwiper .swiper-pagination",
        clickable: true,
      },

      navigation: {
        nextEl: ".heroSwiper .swiper-button-next",
        prevEl: ".heroSwiper .swiper-button-prev",
      },

      observer: true,
      observeParents: true,
    });
  }

  // Initialize testimonials only if present
  const testimonialElement =
    document.querySelector(".testimonialSwiper");

  if (testimonialElement) {
    new Swiper(".testimonialSwiper", {
      loop: true,
      speed: 700,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".testimonial-next",
        prevEl: ".testimonial-prev",
      },
    });
  }

  // Update footer year if the element exists
  const yearElement = document.getElementById("currentYear");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
