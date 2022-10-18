class Garden{
    constructor(spaceAvailable){
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant (plantName, spaceRequired){
        if(this.spaceAvailable-spaceRequired<0){
            throw new Error("Not enough space in the garden.");
        } else {
            this.spaceAvailable=this.spaceAvailable-spaceRequired;
            this.plants.push({
                plantName: plantName, spaceRequired: spaceRequired, ripe: false, quantity: 0 
            });
            return `The ${plantName} has been successfully planted in the garden.`
        }
    }

    ripenPlant(plantName, quantity){
        let foundEl = this.plants.find(element=> element.plantName==plantName);
        if (!foundEl) {
            throw new Error(`There is no ${plantName} in the garden.`);
        } else {
            if(foundEl.ripe==true){
                throw new Error(`The ${plantName} is already ripe.`);
            } else{
                if(quantity<=0){
                    throw new Error("The quantity cannot be zero or negative.");
                } else{
                    foundEl.ripe=true;
                    foundEl.quantity+=quantity;
                    if (quantity==1) {
                        return `${quantity} ${plantName} has successfully ripened.`
                    } else{
                        return `${quantity} ${plantName}s have successfully ripened.`
                    }
                }
            }
        }
    }

    harvestPlant(plantName){
        let foundEl = this.plants.find(element=> element.plantName==plantName);
        if(!foundEl){
            throw new Error (`There is no ${plantName} in the garden.`);
        } else {
            if(foundEl.ripe==false) {
                throw new Error (`The ${plantName} cannot be harvested before it is ripe.`);
            } else {
                this.storage.push({plantName: foundEl.plantName, quantity: foundEl.quantity});
                this.spaceAvailable+=foundEl.spaceRequired
                for (let i = 0; i < this.plants.length; i++) {
                    if(this.plants[i]==foundEl){
                        this.plants.splice(i,1);
                    }
                }
                return `The ${plantName} has been successfully harvested.`
            }
        }
    }

    generateReport(){
        let result = [`The garden has ${this.spaceAvailable} free space left.`];
        let plantsResult = "Plants in the garden:"
        let storagePlantsRes = "Plants in storage:"
        let sortedPlants  = this.plants.sort((a,b)=>{
            a.plantName.localeCompare(b.plantName)
        });
        sortedPlants.forEach(element=>{
            plantsResult+=` ${element.plantName}`;
            if(sortedPlants[sortedPlants.length-1]!=element){
                plantsResult+=',';
            }
        });
        result.push(plantsResult);
        if(this.storage.length==0){
            result.push("Plants in storage: The storage is empty.");
        } else{
            this.storage.forEach(element=>{
                storagePlantsRes+= ` ${element.plantName} (${element.quantity})`;
            })
            result.push(storagePlantsRes);
        }
        return result.join("\n");
    }
}



const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());





