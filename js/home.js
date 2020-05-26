var swiper = new Swiper('#brands-slider', {
    autoplay:{
        delay: 2000,
        reverseDirection: false
    },
    speed: 1500,
    breakpoints: {
        520:{
            slidesPerView: 3,
            spaceBetween: 50,
        },
        1024:{
            slidesPerView: 6,
            spaceBetween: 50,
        }
    }
});