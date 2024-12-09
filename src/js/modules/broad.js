import $ from "jquery";

if ($(window).width() <= 1280) {
  $(".broad__items").slick({ slidesToShow: 4, slidesToScroll: 4 });
}
