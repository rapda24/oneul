document.addEventListener('componentLoaded', (event) => {
    if (event.detail === 'aside') {
        $('aside .p_savings').addClass('active')
    }
});
