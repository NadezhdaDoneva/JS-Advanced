function calc() {
    let firstNumElement = document.getElementById('num1')
    let secondNumElement = document.getElementById('num2')
    let firstNum = Number (firstNumElement.value)
    let secondNumber = Number(secondNumElement.value)
    let sum = firstNum+secondNumber
    let resultElement = document.getElementById('sum')
    resultElement.value=sum
}
