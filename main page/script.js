const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function page3Animation(){
    var elemC = document.querySelector("#elem-container");
var fix = document.querySelector("#fixed-image");
elemC.addEventListener("mouseenter", function () {
  fix.style.display = "block";
});
elemC.addEventListener("mouseleave", function () {
  fix.style.display = "none";
});

var elems = document.querySelectorAll(".elem");
elems.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    var image = e.getAttribute("data-image");
    fix.style.backgroundImage = `url(${image})`;
  });
});
}

function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
      });
}

function loaderAnimation(){
  var loader = document.querySelector("#loader")
setTimeout(function(){
  loader.style.top = "-100%"
},4300)
}

swiperAnimation()
page3Animation()
loaderAnimation()


