function addItem() {
    let inputElement = document.getElementById('newItemText');
    let listElement =  document.getElementById('items');
    let newLiElement = document.createElement('li');
    newLiElement.textContent = inputElement.value;

    let deleteElement = document.createElement('a');
    deleteElement.href = '#';
    deleteElement.textContent = '[Delete]';
    deleteElement.addEventListener('click', (e) => {
        e.currentTarget.parentNode.remove();
    })
    newLiElement.appendChild(deleteElement);
    listElement.appendChild(newLiElement);
}