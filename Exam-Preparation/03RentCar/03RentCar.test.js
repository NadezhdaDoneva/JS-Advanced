const rentCar = require("./03RentCar");
const {assert} = require("chai");

describe('Rent car function tests', ()=>{
    describe('searchCar function tests', ()=>{
        //invalid input
        it('should throw an error when the first input element is invallid', ()=>{
            assert.throw(() => rentCar.searchCar('str', 'str'), "Invalid input!");
        });
        it('should throw an error when the second input element is invallid', ()=>{
            assert.throw(() => rentCar.searchCar([], 10), "Invalid input!");
        });
        it('should throw an error when both input elements are invallid', ()=>{
            assert.throw(() => rentCar.searchCar('str', []), "Invalid input!");
        });
        //valid input but no matching elements
        it('should throw an error when there are no matching elements', ()=>{
            assert.throw(() => rentCar.searchCar(['Audi', 'BMW'], 'Mercedes'), 'There are no such models in the catalog!'
            );
        });
        it('should throw an error when the array is empty', ()=>{
            assert.throw(() => rentCar.searchCar([], 'Mercedes'), 'There are no such models in the catalog!'
            );
        });
        it('should throw an error when the string is empty', ()=>{
            assert.throw(() => rentCar.searchCar(['Audi', 'BMW'], ''), 'There are no such models in the catalog!'
            );
        });
        //valid input and matching elements
        it('should return the right value', ()=>{
            assert.equal(rentCar.searchCar(['Audi', 'BMW'], 'BMW'), `There is 1 car of model BMW in the catalog!`
            );
        });
    });

    describe("calculatePriceOfCar function tests", ()=>{
        //invalid input
        it('should throw an error when the first input element is invallid', ()=>{
            assert.throw(() => rentCar.calculatePriceOfCar(10, 10), "Invalid input!");
        });
        it('should throw an error when the second input element is invallid', ()=>{
            assert.throw(() => rentCar.calculatePriceOfCar('str', 'str'), "Invalid input!");
        });
        it('should throw an error when both input elements are invallid', ()=>{
            assert.throw(() => rentCar.calculatePriceOfCar([], []), "Invalid input!");
        });
        //valid input but no such model
        it('should throw an error when there are no matching elements', ()=>{
            assert.throw(() => rentCar.calculatePriceOfCar('test', 10), 'No such model in the catalog!'
            );
        });
        //valid input and existing mathing elements
        it('should return the right value', ()=>{
            assert.equal(rentCar.calculatePriceOfCar('Volkswagen', 10), `You choose Volkswagen and it will cost $200!`
            );
        });
    });

    describe('checkBudget finction test', ()=>{
        //invalid input
        it('should throw an error when the first input element is invallid', ()=>{
            assert.throw(() => rentCar.checkBudget('test', 10, 10), "Invalid input!");
        });
        it('should throw an error when the second input element is invallid', ()=>{
            assert.throw(() => rentCar.checkBudget(10, 'test', 10), "Invalid input!");
        });
        it('should throw an error when the third input element is invallid', ()=>{
            assert.throw(() => rentCar.checkBudget(10, 10, 'test'), "Invalid input!");
        });
        //valid input
        it('should return the right value', ()=>{
            assert.equal(rentCar.checkBudget(10, 10, 200), `You rent a car!`
            );
        });
        it('should return the right value', ()=>{
            assert.equal(rentCar.checkBudget(10, 10, 20), 'You need a bigger budget!'

            );
        });
    });
})