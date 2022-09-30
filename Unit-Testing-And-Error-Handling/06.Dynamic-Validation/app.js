function validate() {
    document.getElementById('email').addEventListener('change', onChange);
    function onChange(ev) {
        let pattern = /[a-z]+@[a-z]+\.[a-z]+/gm;

        if (pattern.test(ev.target.value)) {
            ev.target.classList.remove('error');
        } else{
            ev.target.classList.add('error');
        }
    }
}