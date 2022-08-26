function solve() {
   let buttonElements = Array.from(document.querySelectorAll('button[class="add-product"]'));
   buttonElements.forEach(el => {
      el.addEventListener('click', onButtonClick)
   });
   function onButtonClick(e){
      let divElement = e.currentTarget.parentElement.parentElement;
      console.log(divElement);
   }
}