function validate() {
    let inputFieldElement = document.getElementById('email');
    let pattern = /[a-z]+@[a-z]+.[a-z]+/gm
    inputFieldElement.addEventListener('change', () => {
        if(!inputFieldElement.value.match(pattern)){
            inputFieldElement.className = 'error'
        } else{
            inputFieldElement.className = ''
        }
    })
}