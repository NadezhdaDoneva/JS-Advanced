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


        <div class="product">
            <div class="product-image">
                <img
                    src="http://missionmission.files.wordpress.com/2010/06/potato-cat.jpg">
            </div>
            <div class="product-details">
                <div class="product-title">Potatoes</div>
                <p class="product-description">Gollum : What's taters, precious? What's taters, eh? Sam : *Po-tay-toes!* Boil 'em, mash 'em, stick 'em in a stew... Lovely big golden chips with a nice piece of fried fish.</p>
            </div>
            <div class="product-add">
                <button @click=${onAdd} class="add-product">
                    Add
                </button>
            </div>
            <div class="product-line-price">0.89</div>
        </div>

        <div class="product">
            <div class="product-image">
                <img
                    src="https://www.allrecipes.com/thmb/NtrQATg6gDlzwi3xlzbzmTXef7o=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/shutterstock_107521418-2000-d41554ac575447449a1ebbc93835cef8.jpg">
            </div>
            <div class="product-details">
                <div class="product-title">Butter</div>
                <p class="product-description">A yellow-to-white solid emulsion of fat globules, water, and inorganic salts produced by churning the cream from cows' milk.</p>
            </div>
            <div class="product-add">
                <button @click=${onAdd} class="add-product">
                    Add
                </button>
            </div>
            <div class="product-line-price">1.00</div>
        </div>

        <div class="product">
            <div class="product-image">
                <img
                    src="https://express.themarketstores.com/media/uploads/product/GS1CA_MKTG_2017-11-30_Market_04/.thumbnails/00632565000159_a1c1.jpg/00632565000159_a1c1-650x0-padded-%23fff.jpg">
            </div>
            <div class="product-details">
                <div class="product-title">Water</div>
                <p class="product-description">Water is h2O, a clear, colorless, odorless, tasteless liquid that freezes into ice below 0 degrees centigrade and boils above 100 degrees centigrade.</p>
            </div>
            <div class="product-add">
                <button @click=${onAdd} class="add-product">
                    Add
                </button>
            </div>
            <div class="product-line-price">2.39</div>
        </div>

        <div class="product">
            <div class="product-image">
                <img
                    src="https://cdn.horme.com.sg/images/product/201309101612473FDPRQRLYCCT5_700.jpg">
            </div>
            <div class="product-details">
                <div class="product-title">Toilet paper</div>
                <p class="product-description">A thin sanitary absorbent paper usually in a roll for use in drying or cleaning oneself after defecation and urination.</p>
            </div>
            <div class="product-add">
                <button @click=${onAdd} class="add-product">
                    Add
                </button>
            </div>
            <div class="product-line-price">0.50</div>
        </div>

        <div class="product">
            <div class="product-image">
                <img src="https://rodinashop.de/wp-content/uploads/2021/01/1-2021-04-19t131138.357.jpg">
            </div>
            <div class="product-details">
                <div class="product-title">Lutenica</div>
                <p class="product-description">The ingredients include peppers, aubergines, carrots, garlic, vegetable oil, sugar, salt, and tomatoes. It comes in many varieties: smooth; chunky; with chili peppers or eggplant; and hot or mild.</p>
            </div>
            <div class="product-add">
                <button @click=${onAdd} class="add-product">
                    Add
                </button>
            </div>
            <div class="product-line-price">3.00</div>
        </div>

        <div class="product">
            <div class="product-image">
                <img
                    src="https://cdn.shopify.com/s/files/1/0206/9470/products/82302-done_1024x1024.jpg?v=1605910613">
            </div>
            <div class="product-details">
                <div class="product-title">Cheese</div>
                <p class="product-description">Cheese is a dairy product produced in wide ranges of flavors, textures, and forms by coagulation of the milk protein casein. It comprises proteins and fat from milk (usually the milk of cows, buffalo, goats, or sheep).</p>
            </div>
            <div class="product-add">
                <button @click=${onAdd} class="add-product">
                    Add
                </button>
            </div>
            <div class="product-line-price">4.00</div>
        </div>

        <div class="product">
            <div class="product-image">
                <img
                    src="https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Avocados-3d84a3a.jpg?quality=90&webp=true&resize=375,341">
            </div>
            <div class="product-details">
                <div class="product-title">Avocado</div>
                <p class="product-description">A bright green fruit with a large pit and dark leathery skin. They're also known as alligator pears or butter fruit. Avocados are a favorite of the produce section. They're the go-to ingredient for guacamole dips.</p>
            </div>
            <div class="product-add">
                <button @click=${onAdd} class="add-product">
                    Add
                </button>
            </div>
            <div class="product-line-price">2.30</div>
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

