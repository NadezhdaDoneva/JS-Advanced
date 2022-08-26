function deleteByEmail() {
    let inputElement = document.querySelector('input[name="email"]');
    let liEmailElements = document.querySelectorAll('tr td:nth-of-type(2)');
    let resultElement = document.getElementById('result');


    console.log(inputElement);
    
    let liEmailElementsArr = Array.from(liEmailElements);

    console.log(liEmailElementsArr);
    let targetElement = liEmailElementsArr.find(x => x.textContent==inputElement.value);
    if (targetElement) {
        resultElement.textContent = 'Deleted.';
        targetElement.parentNode.remove();
    } else{
        resultElement.textContent = 'Not found.'
    }
}