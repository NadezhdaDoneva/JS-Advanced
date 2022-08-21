function toggle() {
    let buttonElement = document.querySelector('.button');
    let textElement = document.getElementById('extra');
    let displayStyle = textElement.style.display;
    if (displayStyle=='none') {
        textElement.style.display = 'block';
        buttonElement.textContent = 'Less';
    } else{
        textElement.style.display = 'none';
        buttonElement.textContent = 'More';
    }
}