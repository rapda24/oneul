$(document).ready(function() {
    $('.box_mprd .new_mprd .tit_l .icon').on('click', function() {
        var $boxMprd = $(this).closest('.box_mprd');
        if ($boxMprd.hasClass('open')) {
            $boxMprd.removeClass('open');
        } else {
            $boxMprd.addClass('open');
        }
    });
});


