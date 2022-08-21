function subtract() {
    let firstElement = document.getElementById('firstNumber');
    let secondElement = document.getElementById('secondNumber');
    let resultElement = document.getElementById('result');

    let number1 = Number(firstElement.value);
    let number2 = Number(secondElement.value);

    resultElement.textContent = number1-number2;
}