import { html } from '../lib.js';



const catalogTemplate = () => html`
<h1  id="market-heading">N&N market</h1>
    <div class="shopping-cart">

        <div class="column-labels">
            <label class="product-image">Image</label>
            <label class="product-details">Product</label>
            <label class="product-add">Add</label>
            <label class="product-price">Price</label>
        </div>

        <div class="product">
            <div class="product-image">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6yxJDgVjW3k5pxNUX6Nz94n6Pj2kCOUZ_GWBdorEs9LhOYd97">
            </div>
            <div class="product-details">
                <div class="product-title">Bread</div>
                <p class="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class="product-add">
                <button @click=${onAdd} class="add-product">
                    Add
                </button>
            </div>
            <div class="product-line-price">0.80</div>
        </div>

        <div class="product">
            <div class="product-image">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf2Fv5x9chdUzzR0VUxoKAOXO91SE8u5F6CmZmoAHfHkPBjM4r0A">
            </div>
            <div class="product-details">
                <div class="product-title">Milk</div>
                <p class="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <div class="product-add">
                <button @click=${onAdd} class="add-product">
                    Add
                </button>
            </div>
            <div class="product-line-price">1.09</div>
        </div>

        <div class="product">
            <div class="product-image">
                <img src="https://www.freepngimg.com/thumb/tomato/3-tomato-png-image-picture-download-thumb.png">
            </div>
            <div class="product-details">
                <div class="product-title">Tomatoes</div>
                <p class="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class="product-add">
                <button @click=${onAdd} class="add-product">
                    Add
                </button>
            </div>
            <div class="product-line-price">0.99</div>
        </div>

        <textarea id="textarea" rows="5" cols="50" disabled></textarea>

        <button @click=${onCheckout} class="checkout">Checkout</button>
        <button @click=${onClear} class="clear">Clear Field</button>

    </div>`;

    export function showCatalog(ctx) {
        ctx.render(catalogTemplate());
    }

    let moneyArr = [];
   let namesArr  = [];
   let total =0;


    function onAdd(e) {
        let textAreaElement = document.getElementById("textarea");
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
    }

    function onCheckout(e){
        let textAreaElement = document.getElementById("textarea");
        if (e.target.tagName=='BUTTON' && e.target.classList.contains('checkout')) {
         
            for (const p of moneyArr) {
               total+=Number(p);
            }
            total = Number(total).toFixed(2)
            textAreaElement.textContent+=`You bought ${namesArr.join(', ')} for ${total}.`
   
         }
    }

    function onClear(e) {
        let textAreaElement = document.getElementById("textarea");
        textAreaElement.textContent = "";
        moneyArr = [];
        namesArr = [];
        total = 0;
  
     }

