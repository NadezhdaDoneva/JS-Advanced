function focused() {
    Array.from(document.querySelectorAll('input')).forEach(i =>{
    i.addEventListener('focus', onFocus)
    i.addEventListener('blur', onBlurr)
    });
    function onFocus(e){
        e.currentTarget.parentElement.className = 'focused';
    }

    function onBlurr(e){
        e.currentTarget.parentNode.className = '';
    }
}