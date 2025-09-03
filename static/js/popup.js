

// pop_notice 관련 기능
$(document).on('click', '.hd_alarm', function (e) {
    $('.pop_binform').addClass('open'); 
});

$(document).on('click', '.o_pu', function () {
    $('.pop_bnotice').addClass('open');
});

/* 주문 관리 */
$(document).on('click', '.btn_cod', function (e) {
    $('.pop_cod').addClass('open'); 
});

$(document).on('click', '.btn_ptr', function () {
    $('.pop_ptr').addClass('open');
});


$(document).on('click', '.btn_om', function () {
    $('.pop_om').addClass('open');
});

/* 회원 관리 */
$(document).on('click', '.btn_sl', function (e) {
    $('.pop_sl').addClass('open'); 
});

$(document).on('click', '.btn_sm', function () {
    $('.pop_sm').addClass('open');
});


$(document).on('click', '.btn_mc', function () {
    $('.pop_mc').addClass('open');
});

$(document).on('click', '.btn_st', function () {
    $('.pop_st').addClass('open');
});

$(document).on('click', '.btn_imb', function (e) {
    $('.pop_imb').addClass('open'); 
});

/* 상품 관리 */
$(document).on('click', '.btn_dpd', function (e) {
    $('.pop_dpd').addClass('open'); 
});

$(document).on('click', '.btn_rdpd', function (e) {
    $('.pop_rdpd').addClass('open'); 
});

$(document).on('click', '.btn_sprd', function (e) {
    $('.pop_sprd').addClass('open'); 
});

$(document).on('click', '.btn_reexc', function (e) {
    $('.pop_reexc').addClass('open'); 
});

/* 쿠폰 */

$(document).on('click', '.btn_ncoupon', function (e) {
    $('.pop_ncoupon').addClass('open'); 
});


$(document).on('click', '.btn_smb', function (e) {
    $('.pop_smb').addClass('open'); 
});


$(document).on('click', '.btn_icoupon', function (e) {
    $('.pop_icoupon').addClass('open'); 
});


$(document).on('click', '.btn_scp', function (e) {
    $('.pop_scp').addClass('open'); 
});

/* 리뷰 */
$(document).on('click', '.btn_drv', function (e) {
    $('.pop_drv').addClass('open'); 
});

$(document).on('click', '.btn_rrv', function (e) {
    $('.pop_rrv').addClass('open'); 
});

/* 기본 설정 */

$(document).on('click', '.btn_mpoint', function (e) {
    $('.pop_mpoint').addClass('open'); 
});

$(document).on('click', '.btn_admg', function (e) {
    $('.pop_admg').addClass('open'); 
});

$(document).on('click', '.btn_br', function (e) {
    $('.pop_br').addClass('open'); 
});

$(document).on('click', '.btn_dpp', function (e) {
    $('.pop_dpp').addClass('open'); 
});

$(document).on('click', '.btn_rbodeumi', function (e) {
    $('.pop_rbodeumi').addClass('open'); 
});

/* 팝업 제거 */
$(document).on('click', '.btn_close, .btn_submit', function (e) {
    e.preventDefault();       // ← 폼 제출/링크 이동 방지
    e.stopPropagation();
    $(this).closest('.popup').removeClass('open');
});






// 드롭다운 열기/닫기
$('.popup .select-box .cni_tit').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.select-box').not($(this).parent()).removeClass('on');
    $(this).parent('.select-box').toggleClass('on');
});

// 옵션 클릭 시 값 넣기
$('.popup .select-box .cni_info li').click(function(e){
    e.preventDefault();   // ← li 안에 <a>가 있을 때 이동 방지
    e.stopPropagation();
    let selectedText = $(this).text().trim();
    $(this).parents('.select-box').find('.cni_tit')
           .html(selectedText + ' <img src="../../../static/img/icon_down.svg">');
    $(this).parents('.select-box').removeClass('on');
});

// 바깥 클릭 시 닫기
$(document).click(function(){
    $('.select-box').removeClass('on');
});
