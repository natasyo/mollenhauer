import $ from "jquery";
import "slick-slider";

$(".key-player__clients").slick({
  slidesToShow: 4,
  arrows: false,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 2000,
});

$(".key-player__next").on("click", function () {
  $(".key-player__clients").slick("slickNext");
});
$(".key-player__prev").on("click", function () {
  $(".key-player__clients").slick("slickPrev");
});

const clientsItems = $(".key-player__clients-say-items-wrap");
clientsItems.slick({
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
});

$('.slider-buttons-button_right').on('click', function () {
  $(clientsItems).slick("slickNext");
})
$('.slider-buttons-button_left').on('click', function () {
  $(clientsItems).slick("slickPrev");
})