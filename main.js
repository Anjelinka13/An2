$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:3,
        loop:true,
        autoplay:true,
        autoplayTimeout: 2500,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            700:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });
    $('.burger').on('click', function () {
        $('.burger, .nav, .burger_line').toggleClass('active')
    })
    //для появления
    $('.contact_btn').on('click', function () {
        $('.overlay,.popup_thanks').fadeIn()
        $('.popup_registreition').fadeOut()
    })
    //для исчезновения
    $('.popup_close').on('click', function () {
        $('.overlay,.popup_thanks').fadeOut()
    })
    $('.nav_btn').on('click', function () {
        $('.overlay,.popup_registreition').fadeIn()
        $('.popup_thanks').fadeOut()
    })
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 1000) {
            $('.go-top').fadeIn('slow')
        } else {
            $('.go-top').fadeOut('slow')
        }
    })
});
var map;
DG.then(function () {
    map = DG.map('map', {
        center: [54.98, 82.89],
        zoom: 13
    });
});