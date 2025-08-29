$(document).on('click', '.btn_creg', function (e) {
    $('.category_detail').addClass('add_cr');
    $('.category_detail').removeClass('add_ci');
    $('.category_detail').removeClass('add_cis');
    $('.category_detail').removeClass('none_con');
});

$(document).on('click', '.cate_list', function (e) {
    $('.category_detail').addClass('add_ci');
    $('.category_detail').removeClass('add_cr');
    $('.category_detail').removeClass('add_cis');
    $('.category_detail').removeClass('none_con');
});

$(document).on('click', '.cate_list_sub', function (e) {
    $('.category_detail').addClass('add_cis');
    $('.category_detail').removeClass('add_cr');
    $('.category_detail').removeClass('add_ci');
    $('.category_detail').removeClass('none_con');
});

document.addEventListener('componentLoaded', (event) => {
    if (event.detail === 'aside') {
        $('aside .p_category').addClass('active')
    }
});
