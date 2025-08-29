document.addEventListener('componentLoaded', (event) => {
    if (event.detail === 'aside') {
        $('aside .p_setting').addClass('active')
    }
});
