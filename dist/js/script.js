"use strict";

/* function testWebP(callback) {

var webP = new Image();
webP.onload = webP.onerror = function () {
callback(webP.height == 2);
};
webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

if (support == true) {
document.querySelector('body').classList.add('webp');
}else{
document.querySelector('body').classList.add('no-webp');
}
});*/
;
/* Swiper-slider in demo-1-page */

var swiper = new Swiper('.demo-1-swiper-container', {
  // Optional parameters
  spaceBetween: 30,
  // Pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.demo-1-button-next',
    prevEl: '.demo-1-button-prev'
  },
  // Scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true
  }
});
;
/* Using feather-icon */

feather.replace();