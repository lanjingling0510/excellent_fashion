 require('./css/bootstrap.min.css');
require('./css/animation.css');
require('./css/base.css');
require('./css/index.css');

require('./js/owl.carousel.min.js');
require('./js/bannerShow.js');
require('./js/base.js');


/* ------------------------------------------------------------
 * 滚动轮
 * ------------------------------------------------------------ */
$(function () {
     var owl = $("#carousel-wrap");
    owl.owlCarousel({
        autoPlay: 5000,
        items : 1,
        itemsDesktop: false,
        itemsDesktopSmall: false,
        itemsTablet: false,
        itemsTabletSmall: false,
        itemsMobile: false,
        pagination: false,
    });
    $('.arr-left').click(function () {
        owl.trigger('owl.prev');
    })
    $('.arr-right').click(function () {
        owl.trigger('owl.next');
    })
})
