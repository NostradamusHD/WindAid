var swiper = new Swiper('#header-slider',{
    autoplay:{
        delay: 5000,
        reverseDirection: false
    },
    speed: 1500,
    effect: 'carousel',
});

$('.languaje').on('click',function(){
    $('.languaje__options').toggleClass('active');
    
});


$('.button_menu').on('click',function(){
    $('.header__top-bar').toggleClass('menu_active');
    $('.header__menu').toggleClass('menu_active');
    if($('.button_menu__icon').hasClass('fa-bars')){
        $('.button_menu__icon').removeClass('fa-bars');
        $('.button_menu__icon').addClass('fa-times');
    }else{
        $('.button_menu__icon').removeClass('fa-times');
        $('.button_menu__icon').addClass('fa-bars');
    }
});