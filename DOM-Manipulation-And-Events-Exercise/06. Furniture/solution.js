function solve() {
  let textInputElement = document.getElementsByTagName('textarea')[0];
  let textOuputElement = document.getElementsByTagName('textarea')[1];
  let tableElement = document.getElementsByTagName('tbody')[0];

  let buyButtonElement = document.getElementsByTagName('button')[1];
  buyButtonElement.addEventListener('click', onBuy);

  let generateButtonElement = document.getElementsByTagName('button')[0];
  generateButtonElement.addEventListener('click', onGenerate);

  function onGenerate(){
    let input = JSON.parse(textInputElement.value);
    for (let i = 0; i < input.length; i++) {
      let newRowElemnt = document.createElement('tr');

      let tdImageElement = document.createElement('td');
      let imageElement = document.createElement('img');
      imageElement.src= input[i].img;
      tdImageElement.appendChild(imageElement);
      newRowElemnt.appendChild(tdImageElement);

      let tdNameElement = document.createElement('td');
      let paragraphNameElement = document.createElement('p');
      paragraphNameElement.textContent = input[i].name;
      tdNameElement.appendChild(paragraphNameElement);
      newRowElemnt.appendChild(tdNameElement);

      let tdPriceElement = document.createElement('td');
      let paragraphPriceElement = document.createElement('p');
      paragraphPriceElement.textContent = input[i].price;
      tdPriceElement.appendChild(paragraphPriceElement);
      newRowElemnt.appendChild(tdPriceElement);

      let tdFactorElement = document.createElement('td');
      let paragraphFactorElement = document.createElement('p');
      paragraphFactorElement.textContent = input[i].decFactor;
      tdFactorElement.appendChild(paragraphFactorElement);
      newRowElemnt.appendChild(tdFactorElement);

      let tdCheckBoxElement = document.createElement('td');
      let checkBoxElement = document.createElement('input');
      checkBoxElement.type="checkbox";
      tdCheckBoxElement.appendChild(checkBoxElement);
      newRowElemnt.appendChild(tdCheckBoxElement);

      tableElement.appendChild(newRowElemnt);
    }
  }

  function onBuy(){
    let checkboxElements = Array.from(document.querySelectorAll('input[type="checkbox"]'));
    let namesArr=[];
    let totalSum =0;
    let totalFactor = 0;
    let counter =0;
    for (const box of checkboxElements) {
      if(box.checked==true){
        let currentRowElement = box.parentElement.parentElement;
        let currentTds = currentRowElement.getElementsByTagName('td');

        let name = currentTds[1].querySelector('p');
        let price = currentTds[2].querySelector('p');
        let decorationFactor = currentTds[3].querySelector('p');

        counter++;
        namesArr.push(name.textContent);
        totalSum+=Number(price.textContent);
        totalFactor+=Number(decorationFactor.textContent);
      }
    }
    let avrgFactor = totalFactor/counter;
    textOuputElement.textContent = `Bought furniture: ${namesArr.join(', ')}\n`;
    textOuputElement.textContent += `Total price: ${totalSum.toFixed(2)}\n`;
    textOuputElement.textContent += `Average decoration factor: ${avrgFactor}`

  }
}