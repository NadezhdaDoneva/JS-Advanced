function addItem() {
    let inputElement = document.getElementById('newItemText');
    let listElement =  document.getElementById('items');
    let newLiElement = document.createElement('li');
    newLiElement.textContent = inputElement.value;
    listElement.appendChild(newLiElement);
}