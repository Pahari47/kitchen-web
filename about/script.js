var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  
});

var autoChangeInterval = 6000;
setInterval(function() {
  swiper.slideNext();
}, autoChangeInterval);

