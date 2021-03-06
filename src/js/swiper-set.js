/* Swiper-slider in demo-1-page */
const swiper = new Swiper('.demo-1-swiper-container', {

    // Optional parameters
    spaceBetween: 30,
    // Pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    // Navigation arrows
    navigation: {
        nextEl: '.demo-1-button-next',
        prevEl: '.demo-1-button-prev',
    },

    // Scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
});