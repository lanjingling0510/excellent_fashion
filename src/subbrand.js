 require('./css/bootstrap.min.css');
require('./css/animation.css');
require('./css/base.css');
require('./css/subbrand.css');


/* ------------------------------------------------------------
 * 点击下拉
 * ------------------------------------------------------------ */
var dropdown_toggle = $(".dropdown");
var dropdown_menu=$(".dropdown-menu");
dropdown_toggle.hover(function() {
    dropdown_menu.stop(true, true).slideDown();
    return false;
}, function() {
    dropdown_menu.stop(true, true).slideUp();
    return false;
});


/* ------------------------------------------------------------
 * 返回顶部
 * ------------------------------------------------------------ */
smoothScroll('.go-header', '#header');

function smoothScroll(btn, target) {
    var animationTime = 500;
    $(document).on('click', btn, function() {
        var position = $(target).offset().top;
        $('html, body').animate({scrollTop: position}, animationTime);
    })
}


  myHover($(".brandIpc1"),$(".Brandbg1"));
  myHover($(".Brandbg1"),$(".Brandbg1"));

  myHover($(".brandIpc2"),$(".Brandbg2"));
  myHover($(".Brandbg2"),$(".Brandbg2"));

  myHover($(".brandIpc3"),$(".Brandbg3"));
  myHover($(".Brandbg3"),$(".Brandbg3"));

  myHover($(".brandIpc4"),$(".Brandbg4"));
  myHover($(".Brandbg4"),$(".Brandbg4"));

  myHover($(".brandIpc5"),$(".Brandbg5"));
  myHover($(".Brandbg5"),$(".Brandbg5"));

  function myHover (obj1,obj2) {
    obj1.hover(
    function(){
      obj2.addClass('opacity1');
    },
    function(){
      obj2.removeClass('opacity1');
      $(".weixinIco2")
      .addClass('Liz-block')
      .addClass('Liz-none')
      .removeClass('Liz-block');
    })
  }



$(".weixinIco").mouseover(function(){
  $(".weixinIco2")
  .addClass('Liz-block')
  .addClass('Liz-none')
  .removeClass('Liz-none');
  $(".tianmaoIco2")
  .addClass('Liz-block')
  .addClass('Liz-none')
  .removeClass('Liz-block');
  $(".weixinIco2").mouseleave(function(){
  $(".weixinIco2")
  .addClass('Liz-block')
  .addClass('Liz-none')
  .removeClass('Liz-block');
});
});
$(".tianmaoIco").mouseover(function(){
  $(".tianmaoIco2")
  .addClass('Liz-block')
  .addClass('Liz-none')
  .removeClass('Liz-none');
  $(".weixinIco2")
  .addClass('Liz-block')
  .addClass('Liz-none')
  .removeClass('Liz-block');
  $(".tianmaoIco2").mouseleave(function(){
  $(".tianmaoIco2")
  .addClass('Liz-block')
  .addClass('Liz-none')
  .removeClass('Liz-block');
});
});
