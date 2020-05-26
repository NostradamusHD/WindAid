var swiper = new Swiper('#article_slider', {
    navigation: {
        prevEl: '#slider_left',
        nextEl: '#slider_right',
    },
    slidesPerView: 1,
    breakpoints: {
        720:{
            slidesPerView: 2,
            spaceBetween: 50,
        },
        1024:{
            slidesPerView: 3,
            spaceBetween: 50,
        }
    }
});
