class VegetableStore{
    constructor(owner, location){
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables){
        let added =[];

        for (const vegetable of vegetables) {
            let [type, quantity, price] = vegetable.split(' ');
            quantity = Number(quantity);
            price = Number(price);

            let product = this.availableProducts.find(obj=>obj.type===type);

            if (product) {
                product.quantity+=quantity;
                if(price>product.price){
                    product.price = price;
                }
            } else{
                this.availableProducts.push({type,quantity,price});
                added.push(type);
            }
        }
        return `Successfully added ${added.join(', ')}`;
    }

    buyingVegetables (selectedProducts){
        let totalPrice =0;
        for (const vegetable of selectedProducts) {
            let [type, quantity] = vegetable.split(' ');
            quantity = Number(quantity);

            let searchedProduct = this.availableProducts.find(product=>product.type===type);

            if(searchedProduct){
                if(quantity>searchedProduct.quantity){
                    throw new Error (`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${(totalPrice).toFixed(2)}.`)
                } else {
                    totalPrice+=searchedProduct.price*quantity;
                    searchedProduct.quantity-=quantity;
                }
            } else {
                throw new Error (`${type} is not available in the store, your current bill is $${(totalPrice).toFixed(2)}.`)
            }
        }
        return `Great choice! You must pay the following amount $${(totalPrice).toFixed(2)}.`
    }

    rottingVegetable (type, quantity){
        let product = this.availableProducts.find(el=>el.type==type);
        if (product) {
            if(quantity>product.quantity){
                product.quantity=0;
                return `The entire quantity of the ${type} has been removed.`
            } else {
                product.quantity-=quantity;
                return `Some quantity of the ${type} has been removed.`
            }
        } else {
            throw new Error(`${type} is not available in the store.`)
        }
    }

    revision (){
        let res = ["Available vegetables:"];
        let sorted = this.availableProducts.sort((a,b)=>{
            a.price-b.price;
        });
        sorted = sorted.reverse();
        for (const el of sorted) {
            res.push(`${el.type}-${el.quantity}-$${el.price}`)
        }
        res.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`)
        return res.join('\n');
    }
}
  
let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());




  
//     buyingVegetables(selectedProducts) {
//       let totalPrice = 0;
  
//       for (const product of selectedProducts) {
//         let [type, quantity] = product.split(' ');
//         quantity = Number(quantity);
  
//         const availableProduct = this.availableProducts.find(obj => obj.type === type);
  
//         if (!availableProduct) {
//           throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
//         }
  
//         if (quantity > availableProduct.quantity) {
//           throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
//         }
  
//         availableProduct.quantity -= quantity;
//         totalPrice += quantity * availableProduct.price;
//       }
  
//       return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
//     }
  
//     rottingVegetable(type, quantity) {
//       const product = this.availableProducts.find(obj => obj.type === type);
  
//       if (!product) {
//         throw new Error(`${type} is not available in the store.`);
//       }
  
//       if (quantity > product.quantity) {
//         product.quantity = 0;
//         return `The entire quantity of the ${type} has been removed.`;
//       }
  
//       product.quantity -= quantity;
//       return `Some quantity of the ${type} has been removed.`;
//     }
  
//     revision() {
//       const sortedProducts = this.availableProducts
//         .sort((a, b) => a.price - b.price)
//         .map(p => `${p.type}-${p.quantity}-$${p.price}`);
  
//       return [
//         'Available vegetables:',
//         sortedProducts.join('\n'),
//         `The owner of the store is ${this.owner}, and the location is ${this.location}.`
//       ].join('\n');
//     }
//   }