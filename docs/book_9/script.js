function PageTopAnime() {
	var scroll = $(window).scrollTop();
	if (scroll >= 200){//上から200pxスクロールしたら
		$('#page-top').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
		$('#page-top').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
	}else{
		if($('#page-top').hasClass('UpMove')){//すでに#page-topにUpMoveというクラス名がついていたら
			$('#page-top').removeClass('UpMove');//UpMoveというクラス名を除き
			$('#page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
		}
	}
}
// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// #page-topをクリックした際の設定
$('#page-top a').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 600);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});

$('#page-link a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
	var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
	var pos = $(elmHash).offset().top-0;	//idの上部の距離を取得
	$('body,html').animate({scrollTop: pos}, 900); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
	return false;
});




// スクロールするとロゴの色変更



jQuery(window).scroll(function() {
        let scrollTop = jQuery(window).scrollTop(); // スクロール上部の位置
        let areaTop = jQuery("main").offset().top; // 対象エリアの上部の位置
        let areaBottom = areaTop + jQuery("main").innerHeight(); // 対象エリアの下部の位置
    
        if (scrollTop > areaTop && scrollTop < areaBottom) {
            jQuery(".cls-1").addClass("change-color");
            jQuery(".logo-circle2").addClass("change-color");
            jQuery("#burger").removeClass("bg-white");
            jQuery("#burger").addClass("bg-book");
        } else {
            $(".cls-1").removeClass("change-color");
            $(".logo-circle2").removeClass("change-color");
            jQuery("#burger").removeClass("bg-book");
            jQuery("#burger").addClass("bg-white");
        }
    });

// ナビゲーション

// grab everything we need
const btn = document.querySelector(".mobile-menu-button");
const sidebar = document.querySelector(".sidebar");

// add our event listener for the click
btn.addEventListener("click", () => {
    sidebar.classList.toggle("translate-x-full");
    btn.classList.toggle("tham-active");
});

$('.nav-link a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
    sidebar.classList.toggle("translate-x-full");
    btn.classList.toggle("tham-active");
});

luxy.init({
    wrapper: '#luxy',
    wrapperSpeed:  0.09
  });