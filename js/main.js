// smoothscroll
$(function(){
	$('a[href^="#"]').click(function(){
		var speed = 800;
		var href = $(this).attr("href");
		var target = $(href == "#" || href == "" ? "html" : href);
		var position = target.offset().top;
		$("body,html").animate({scrollTop:position},speed,"swing");
		return false;
	});
});

// フェードで表示
$(function(){
//#top-backを変数pageTopに格納
var pagetop = $('#top-back');
//スクロールをすると{}の中を実行
$(window).scroll(function(){
//$(this).scrollTop()でスクロール位置の値を取得。位置が300より大きければ
if ( $(this).scrollTop() > 300 ) {
//pageTopをフェードイン表示
pagetop.fadeIn();
//位置が300より大きくなければ
} else {
//pageTopをフェードアウト非表示
pagetop.fadeOut();
}
});
//pageTopをクリックすると{}の中を実行
pagetop.click(function () {
//animate()で800ミリ秒後にscrollTopを0位置に
$('body, html').animate({ scrollTop: 0 }, 800);
//a要素を無効化
return false; 
});
});

// backstretch
$(function(){
  $(".backstretch").backstretch([
  "images/aozora.png",
  "images/yasai_1.png",
  "images/yasai_3.png",
  "images/inaho.png"
  ],{
    fade:2500,
    duration:3000
  });
});

// navをスクロール時にトップに固定 実行コード
$(function() {
	var nav = $(".navigation_wrp"),
	offset = nav.offset().top;
	$(window).scroll(function () {
	if($(window).scrollTop() > offset) {
	nav.addClass('fixed');
	} else {
	nav.removeClass("fixed");
	}
	});
	});

// humburger menu code
    $(function () {
    $('.js-btn').on('click', function () {        // js-btnクラスをクリックすると、
      $('.hb_list , .btn-line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
    });
  });
  