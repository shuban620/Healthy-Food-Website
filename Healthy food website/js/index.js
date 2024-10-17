const swiper = new Swiper('.swiper', {
    effect: 'slide',  // Use coverflow effect
    slidesPerView: 4,  // Display 4 slides
    spaceBetween: 5,  // Space between slides
    loop: true,  // Enable infinite looping
    centeredSlides: false,  // Center slides horizontally
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    autoplay: {
      delay: 1000,  // Autoplay delay (2 seconds)
      disableOnInteraction: false,  // Continue autoplay after interaction
    },
  
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
        centeredSlides: false,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
        centeredSlides: true,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
        centeredSlides: true,
      },
    },

});

// Pause the Swiper on mouse enter (hover) and resume on mouse leave
const swiperContainer = document.querySelector('.swiper');

swiperContainer.addEventListener('mouseenter', () => {
    swiper.autoplay.stop();  // Stop autoplay when mouse enters the slider
});

swiperContainer.addEventListener('mouseleave', () => {
    swiper.autoplay.start();  // Resume autoplay when mouse leaves the slider
});