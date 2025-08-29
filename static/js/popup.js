

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

/* 팝업 제거 */

$(document).on('click', '.btn_close, .btn_submit', function () {
    $(this).closest('.popup').removeClass('open');
});
