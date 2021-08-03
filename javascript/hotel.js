$(function() {
  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 4000
  });

  $("#drawerToggle").click(function(){
    $(this).toggleClass("open");
    $("#globalNav").slideToggle();
  });

  $(window).on("resize", function() {
    var w = $(window).width();
    if(w > 895) {
      $("#drawerToggle").removeClass("open");
      $("#globalNav").hide();
    }
  });

  $(window).scroll(function () {
    $(".effect-fade,.contents").each(function () {
      var elemPos = $(this).offset().top;                               //要素の位置を取得
      var scroll = $(window).scrollTop();                               //スクロール位置を取得
      var windowHeight = $(window).height();                            //画面幅を取得（画面の下側に入ったときに動作させるため)
      if (scroll > elemPos - windowHeight) {
        $(this).addClass("effect-scroll");
      }
    });
  });
  jQuery(window).scroll();

});
