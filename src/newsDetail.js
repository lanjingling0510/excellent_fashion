 require('./css/bootstrap.min.css');
require('./css/animation.css');
require('./css/base.css');
  require('./css/rotateHeads.css');
require('./css/newsDetail.css');

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
