import $ from 'jquery';
function mobileNav() {
    $('.mobile-nav-btn').on('click', function (e) {
        console.log('lkjdflsdf')
        $(e.target).toggleClass('mobile-nav-btn_is-open')
        $('.mobile-menu').toggleClass('mobile-menu_is-open')
    })
}

export default mobileNav;