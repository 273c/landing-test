

//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK

$('#page-link a[href*="#"]').click(function () {
	var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
	var pos = $(elmHash).offset().top-10;	//idの上部の距離を取得
	$('body,html').animate({scrollTop: pos}, 900); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
	return false;
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


//luxy.js　振り分け

if (navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0) {
     //スマートフォン向けの記述
} else if (navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('Android') > 0) {
    // タブレット向けの記述
} else {
    // PC向けの記述
    luxy.init({
        wrapper: '#luxy',
        wrapperSpeed:  0.08
      });
}



// page-top

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

// #page-topをクリックした際の設定
$('#page-top a').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 600);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});


 $(window).scroll(function() {
    PageTopAnime();

	let areaTop = $("#main").offset().top; // 対象エリアの上部の位置
	let areaBottom = areaTop + $("#main").innerHeight(); // 対象エリアの下部の位置

	if ($(this).scrollTop() > areaTop && $(this).scrollTop() < areaBottom) {
        $("#burger").removeClass("bg-white");
        $("#burger").addClass("bg-book");
	} else {
	    $("#burger").removeClass("bg-book");
        $("#burger").addClass("bg-white");
	}
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('scroll load', function () {
    $("#splash").delay(1300).fadeOut('slow');
    $("#splash_logo").delay(1300).fadeOut('slow');
    $('body').css('display', 'block');
});
