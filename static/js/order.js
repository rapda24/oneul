document.addEventListener('componentLoaded', (event) => {
    if (event.detail === 'aside') {
        $('aside .p_order').addClass('active')
    }
    // 공통 기능 적용
    console.log('Common features applied!');
});



$(document).ready(function () {
    $('.center_info > ul > li').on('click', function () {
        // 클릭된 요소에 'open' 클래스 토글
        $(this).toggleClass('open');
        
        // 해당 'mcn' 클래스 토글 처리
        const index = $(this).attr('class').match(/icn_(\d+)/)?.[1];
        if (index) {
            const targetMap = $(`.map_cn.mcn_${index.padStart(2, '0')}`);
            targetMap.toggleClass('open', $(this).hasClass('open'));
        }
    });

    // 마우스 오버 이벤트
    $('.center_info > ul > li').on('mouseover', function () {
        const index = $(this).attr('class').match(/icn_(\d+)/)?.[1];
        if (index) {
            $(`.map_cn.mcn_${index.padStart(2, '0')}`).addClass('active');
        }
    });

    // 마우스 아웃 이벤트
    $('.center_info > ul > li').on('mouseout', function () {
        const index = $(this).attr('class').match(/icn_(\d+)/)?.[1];
        if (index) {
            $(`.map_cn.mcn_${index.padStart(2, '0')}`).removeClass('active');
        }
    });
});



$(document).ready(function(){
    // 드롭다운 열기/닫기
    $('.center_info .select-box .cni_tit').click(function(e){
        e.stopPropagation();
        $('.select-box').not($(this).parent()).removeClass('on'); // 다른 select 닫기
        $(this).parent('.select-box').toggleClass('on');
    });

    // 옵션 클릭 시 값 넣기
    $('.center_info .select-box .cni_info li').click(function(){
        let selectedText = $(this).text();
        $(this).parents('.select-box').find('.cni_tit').html(selectedText + ' <img src="../../../static/img/icon_down.svg">');
        $(this).parents('.select-box').removeClass('on');
    });

    // 바깥 클릭 시 닫기
    $(document).click(function(){
        $('.select-box').removeClass('on');
    });
});
