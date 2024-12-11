import $ from "jquery";
function mobileNav() {
  $(".mobile-nav-btn").on("click", function (e) {
    $("body").toggleClass("mobile-nav-show");
  });
}

export default mobileNav;
