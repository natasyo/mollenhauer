import $ from "jquery";
import mobileNav from "./modules/mobile-nav.js";

mobileNav();
import "./modules/main-rect.js";
import "./modules/benefit.js";
import "./modules/key-player.js";
import "./modules/map.js";
import "./modules/broad.js";


 
	var nav = $('.header');
    console.log(nav.height())
	$(window).scroll(function () {
		if ($(this).scrollTop() > nav.height()) {
           $('.mobile-nav-btn').addClass("f-nav");
			nav.addClass("f-nav");
		} else {
            $('.mobile-nav-btn').removeClass("f-nav");
            nav.removeClass("f-nav");
		}
	});
 
