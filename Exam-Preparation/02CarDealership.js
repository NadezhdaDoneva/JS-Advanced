class CarDealership{
    constructor(name){
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome =0;
        this.soldCarsCount=0;
    }

    addCar (model, horsepower, price, mileage){
        if(model.length>0 && Number.isInteger(horsepower) && horsepower>=0 && price>=0 && mileage>=0){
            this.availableCars.push({model: model, horsepower: horsepower, price: price, mileage: mileage});
            return `New car added: ${model} - ${horsepower} HP - ${(mileage).toFixed(2)} km - ${(price).toFixed(2)}$`
        } else{
            throw new Error ("Invalid input!");
        }
    }

    sellCar (model, desiredMileage){
        let soldPrice = 0;
        let foundCar = this.availableCars.find(element=>element.model==model);
        if(!foundCar){
            throw new Error (`${model} was not found!`);
        } else {
            if(foundCar.mileage<=desiredMileage){
                soldPrice = foundCar.price;
            } else if(foundCar.mileage-desiredMileage<=40.000){
                soldPrice = 95/100*foundCar.price;
            } else {
                soldPrice = 90/100*foundCar.price;
            }
            for (let i = 0; i < this.availableCars.length; i++) {
                if(this.availableCars[i]==foundCar){
                    this.availableCars.splice(i,1);
                }
            }
            this.soldCars.push({model: foundCar.model, horsepower: foundCar.horsepower, soldPrice: soldPrice});
            this.totalIncome+=soldPrice;
            this.soldCarsCount++;
            return `${model} was sold for ${(soldPrice).toFixed(2)}$`
        }
    }

    currentCar (){
        if(this.availableCars.length!=0){
            let result = ["-Available cars:"];
            this.availableCars.forEach(car=>{
                result.push(`---${car.model} - ${car.horsepower} HP - ${(car.mileage).toFixed(2)} km - ${(car.price).toFixed(2)}$`);
            });
            return result.join('\n');
        } else{
            return "There are no available cars";
        }
    }

    salesReport (criteria){
        if(criteria=='horsepower'){
            let sortedCars = this.soldCars.sort((a,b)=>{
                a.horsepower-b.horsepower;
            });
            sortedCars=sortedCars.reverse();
                let res = [`-${this.name} has a total income of ${(this.totalIncome).toFixed(2)}$`];
                res.push(`-${this.soldCarsCount} cars sold:`);
                sortedCars.forEach((car)=>{
                    res.push(`---${car.model} - ${car.horsepower} HP - ${(car.soldPrice).toFixed(2)}$`);
            });
            return res.join("\n");
        } else if(criteria=="model"){
            let sortedCars = this.soldCars.sort((a,b)=>{
                a.localeCOmpare(b);
            });
                let res = [`-${this.name} has a total income of ${(this.totalIncome).toFixed(2)}$`];
                res.push(`-${this.soldCarsCount} cars sold:`);
                sortedCars.forEach((car)=>{
                    res.push(`---${car.model} - ${car.horsepower} HP - ${(car.soldPrice).toFixed(2)}$`);
            });
            return res.join("\n");
        } else {
            throw new Error ("Invalid criteria!");
        }
    }
}


let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));


