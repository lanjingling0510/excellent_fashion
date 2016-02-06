 require('./css/bootstrap.min.css');
require('./css/animation.css');
require('./css/base.css');
  require('./css/rotateHeads.css');
require('./css/news.css');

require('./js/jquery.waypoints.min.js');
require('./js/base.js');
require('./js/rotateHeads.js');

/* ------------------------------------------------------------
 *	头部的图片轮播
 * ------------------------------------------------------------ */

$(function () {
    $('#toggleHeads').rotateHeads([
        './images/1.png',
        './images/2.png',
        './images/3.png',
        './images/4.png',
        './images/5.png',
    ]);
})

/* ------------------------------------------------------------
 * jQuery滚动监听
 * ------------------------------------------------------------ */

$(function functionName() {
   $('.newList-item').waypoint(function(direction) {
       if (direction === 'down') {
           $(this.element).addClass('animation-slide-up');
       }
   }, {offset: '80%'});
   $('#footer').waypoint(function(direction) {
       if (direction === 'down') {
           $('#footer').addClass('animation-slide-up');
       }
   }, {offset: '80%'});
})
