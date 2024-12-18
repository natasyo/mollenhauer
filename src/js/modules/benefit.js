import $ from "jquery";
import "slick-slider";

const benefits = $(".benefit__items");

benefits.slick({
  arrows: false,
  //  autoplay: true,
  autoplaySpeed: 3000,  responsive:[
    {
     breakpoint: 768,
       settings: {
        dots:true
       }
    }]
});

$(".benefit__paginations-button_left").on("click", function () {
  $(benefits).slick("slickPrev");
});
$(".benefit__paginations-button_right").on("click", function () {
  $(benefits).slick("slickNext");
});

$(benefits).on("afterChange", function (e) {
  const current = $(benefits).slick("slickCurrentSlide");
  $(".benefit__paginations-item").map((index, item) => {
    if ($(item).data("index") <= current) {
      $(item).addClass("benefit__paginations-item_visited");
    } else {
      $(item).removeClass("benefit__paginations-item_visited");
    }
  });
});
