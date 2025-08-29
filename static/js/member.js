document.addEventListener('componentLoaded', (event) => {
    if (event.detail === 'aside') {
        $('aside .p_member').addClass('active')
    }
});


$(document).on('click', '.popup.pop_imb .order_list > li', function (e) {
    $(this).toggleClass('open'); 
});