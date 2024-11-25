import $ from "jquery";
import "slick-slider";

$(".key-player__clients").slick({
  slidesToShow: 4,
  arrows: false,
});

$(".key-player__next").on("click", function () {
  $(".key-player__clients").slick("slickNext");
});
$(".key-player__prev").on("click", function () {
  $(".key-player__clients").slick("slickPrev");
});
