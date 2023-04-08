function solve() {
   document.getElementsByClassName('shopping-cart')[0].addEventListener('click', onCheckout);
   document.getElementsByClassName('clear')[0].addEventListener('click', onClear)
   let moneyArr = [];
   let namesArr  = [];
   let total =0;
   let textAreaElement = document.getElementsByTagName('textarea')[0];
   function onCheckout(e){
      if(e.target.tagName=='BUTTON' && e.target.classList.contains('add-product')){
         let productDivElement = e.target.parentNode.parentNode;
         let name = productDivElement.querySelector('.product-title').textContent;
         let price = Number(productDivElement.querySelector('.product-line-price').textContent).toFixed(2);
         if (!namesArr.includes(name)) {
            namesArr.push(name);
         }
         moneyArr.push(price);
         textAreaElement.textContent+=`Added ${name} for ${price} to the cart.\n`;
      }
      if (e.target.tagName=='BUTTON' && e.target.classList.contains('checkout')) {
         
         for (const p of moneyArr) {
            total+=Number(p);
         }
         total = Number(total).toFixed(2)
         textAreaElement.textContent+=`You bought ${namesArr.join(', ')} for ${total}.`

      }
   }

   function onClear(e) {
      textAreaElement.textContent = "";
      moneyArr = [];
      namesArr = [];
      total = [];

   }

}