$(document).ready(function() {
    var owl = $('.banner.owl-carousel');
    owl.owlCarousel({
        margin: 10,
        nav: false,
        loop: true,
        items: 1,
        autoplay:true,
        autoplayTimeout: 3000
    })

    var owl2 = $('.information .owl-carousel');
    owl2.owlCarousel({
        margin: 10,
        loop: true,
        items: 1,
        autoplay:true,
        autoplayTimeout: 3000
    })

    var wow = new WOW(
        {
            animateClass: 'animated',
            offset:       100
        }
    );
    wow.init();
    $('.responsive-menu').hide()
    $('.menu-button').click(function () {
        $('.responsive-menu').slideToggle(500)
    })

})

