
// HEADER SWIPER
var swiper = new Swiper(".mySwiper", {

  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 4000
  }
});


// LANDING TOURS SWIPER
var swiper = new Swiper(".tourSwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },

    700: {
      slidesPerView: 2
    },

    1200: {
      slidesPerView: 3
    },

    1300: {
      slidesPerView: 4
    }
  }
});

// LANDING REVIEWS SWIPER
var swiper = new Swiper(".reviewsSwiper", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 4000
  }
});


// ABOUT CERTIFICATES SWIPER
var swiper = new Swiper(".certificatesSwiper", {
  pagination: {
    el: ".swiper-pagination",
  },

  slidesPerView: 2,
  spaceBetween: 30,

  breakpoints: {
    1296: {
      slidesPerView: 2
    },

    0: {
      slidesPerView: 1
    }
  },

  autoplay: {
    delay: 4000
  }
});