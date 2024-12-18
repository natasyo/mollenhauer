import $ from "jquery";

if ($(window).width() <= 1280) {
  $(".broad__items").slick({ slidesToShow: 4, slidesToScroll: 4, dots: true, responsive:[
   {
    breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
   },
   {
    breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
   },
   {
    breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
   }
    
  ] });
}
