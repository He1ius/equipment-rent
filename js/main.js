$(document).ready(function(){
    var carousel = Array();


    $(".owl-carousel--three").owlCarousel({
      margin: 24,
      items: 3,
      dots: false,
      responsiveBaseElement: $(".owl-carousel--three"),
      responsive:{ //Адаптация в зависимости от разрешения экрана
        0:{
          items: 1,
          margin: 20,
          dots: true,
          dotsEach: true,
        },
        576:{
          items:2,
          margin: 20,
        },
        993:{
          items:3
        },
      }
    });
});