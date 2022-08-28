function addItem() {
    let menuElement = document.getElementById('menu');
    let inputTextElement = document.getElementById('newItemText');
    let inputValueElement = document.getElementById('newItemValue');
    let newElemnt = document.createElement('option');
    newElemnt.value = inputValueElement.value;
    newElemnt.text = inputTextElement.value;
    menuElement.appendChild(newElemnt);
    inputTextElement.value = '';
    inputValueElement.value = '';
}