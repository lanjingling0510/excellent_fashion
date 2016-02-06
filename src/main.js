

///////////////
// index.js //
///////////////

/* ------------------------------------------------------------
 * 依赖模块
 * ------------------------------------------------------------ */


 require('./css/bootstrap.min.css');
 require('./css/animation.css');
 require('./css/base.css');
 require('./css/rotateHeads.css');
 require('./css/main.css');

require('./js/owl.carousel.min.js');
require('./js/jquery.waypoints.min.js');
require('./js/base.js');
require('./js/rotateHeads.js');

/* ------------------------------------------------------------
 *	头部的图片轮播
 * ------------------------------------------------------------ */

$(function () {
    $('#header').height(document.documentElement.clientHeight);
    $('#toggleHeads').rotateHeads([
        './images/1.png',
        './images/2.png',
        './images/3.png',
        './images/4.png',
        './images/5.png',
    ]);
})


/* ------------------------------------------------------------
 * 滚动轮
 * ------------------------------------------------------------ */
$(function () {
     var owl = $("#carousel-wrap");
    owl.owlCarousel({
        autoPlay: 5000,
        items : 4,
        itemsDesktop: false,
        itemsDesktopSmall: false,
        itemsTablet: false,
        itemsTabletSmall: false,
        itemsMobile: false,
    });
    $('.navigation-prev').click(function () {
        owl.trigger('owl.prev');
    })
    $('.navigation-next').click(function () {
        owl.trigger('owl.next');
    })
})


 /* ------------------------------------------------------------
  * jQuery滚动监听
  * ------------------------------------------------------------ */

$(function functionName() {
    $('#header').waypoint(function(direction) {
        if (direction === 'down') {
            $('#header .overlayer').removeClass('active');
        } else if (direction === 'up') {
            $('#header .overlayer').addClass('active');
        }
    }, {offset: -200});

    $('#section1').waypoint(function(direction) {
        if (direction === 'down') {
            $('#section1').addClass('animation-slide-up');
            $('#section2').addClass('animation-slide-up');
        }
    }, {offset: '50%'});
    $('#section3').waypoint(function(direction) {
        if (direction === 'down') {
            $('#section3').addClass('animation-slide-up');
            $('#section4').addClass('animation-slide-up');
        }
    }, {offset: '50%'});
    $('#footer').waypoint(function(direction) {
        if (direction === 'down') {
            $('#footer').addClass('animation-slide-up');
        }
    }, {offset: '100%'});
})
