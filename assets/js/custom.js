$(document).ready(function(){
    $('.myCarousel').owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplaySpeed: 2000,
        // autoplayHoverPause:true,
        nav:true,
        smartSpeed:500
    });
    $(".services-main-item").owlCarousel({
        items:3,
        loop:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplaySpeed: 2000, 
        // autoplayHoverPause:true,
        smartSpeed:500,
        dots:false,
        margin: 70,
        pauseOnFocus: true
    });
    $(".team-members").owlCarousel({
        items:3,
        loop:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplaySpeed: 1000, 
        // autoplayHoverPause:true,
        smartSpeed:500,
        dots:false,
        margin: 50,
        pauseOnFocus: true
    });
    $('.testimonial-main').slick({
        autoplay:true,
        autoplayTimeout: 5000,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: true,
        centerPadding: '0',
        pauseOnHover: false,
        swipeToSlide:true
      });
    // counter 
    $('.myCounter').counterUp({
        time: 2000
    });

    // mixit up gellary 
    var mixer = mixitup('.gellary-wrraper', {
        load: {
            filter : '.all'
        }
    });



    //aos animantion
    AOS.init({
        duration: 1000
    });
});

// preloader 
$(window).on('load',function(){
    $("#preloader-main").delay(900).fadeOut("slow");
});

// wow js 
new WOW().init();