/* header scroll */
$(window).scroll(function(){
    const scroll = $(window).scrollTop();
    const headerH = $("header").height();
    if (scroll >= headerH) {
        $("header").addClass("scroll");
    } else {
        $("header").removeClass("scroll");
    }
});

/* gnb-menu open */
$(".btn-menu").on("click",function(){
	$("body").addClass("no-scroll");
	$(".gnb-menu").addClass("active").attr("aria-hidden", "false");
	$(document).on("keyup", function(evt){
		var keycode = evt.which;
		if(keycode == 27){
			$("body").removeClass("no-scroll");
			$(".gnb-menu").removeClass("active").attr("aria-hidden", "true");
		}
	});
});

/* gnb-menu close */
$(".btn-gnb-close").on("click",function(){
	$("body").removeClass("no-scroll");
	$(".gnb-menu").removeClass("active").attr("aria-hidden", "true");
});
$(".gnb-menu").click(function(e){
    if(!$(".gnb-menu").has(e.target).length){
        $(".gnb-menu").removeClass("active").attr("aria-hidden", "true");
        $("body").removeClass("no-scroll");
    }
});

/* gnb-menu > sub-menu open */
$(".gnb-menu .gnb-tit.after").click(function(e){
    e.preventDefault();
	if ($(this).hasClass("active")){
		$(this).removeClass("active");
		$(this).next(".sub-menu").stop().slideUp();
	} else {
		$(this).addClass("active");
		$(this).next(".sub-menu").stop().slideDown();
		$(this).parent().siblings().find(".sub-menu").stop().slideUp();
		$(this).parent().siblings().find(".gnb-tit.after").removeClass("active");
	}
});

/* Swiper 변수 */
const windowWidth = $(window).width();
const m20 = 20 / 1080 * windowWidth;
const m30 = 30 / 1080 * windowWidth;
const m40 = 40 / 1080 * windowWidth;

/* gnb - 내주변 슈퍼마켓 */
const GnbaroundListSlide = new Swiper(".gnb-around-list-slide", {
    loop: false,
    slidesPerView: 2.6,
    spaceBetween: m30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        320:  {
            slidesPerView: 3,
            spaceBetween: m30,
        },
        1080:  {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }
});

/* gnb - 이벤트 배너 */
const gnbBannerSlide = new Swiper(".gnb-banner-slide", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: m30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        320:  {
            slidesPerView: 2,
            spaceBetween: m30,
        },
        1080:  {
            slidesPerView: 2,
            spaceBetween: 20,
        }
    }
});

/* btn-like */
$(".btn-like").click(function(){
    $(this).toggleClass("active");
});
