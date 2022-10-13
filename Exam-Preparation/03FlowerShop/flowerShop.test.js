const flowerShop = require("./flowerShop");
const {assert} = require("chai");

describe('bookSelection function tests', ()=>{
    describe('calcPriceOfFlowers finction tests', ()=>{
        //invalid input
        it('should throw an error when the 1 input is invallid', ()=>{
            assert.throw(() => flowerShop.calcPriceOfFlowers(10,1,1), 'Invalid input!');
        });
        it('should throw an error when the 2 input is invallid', ()=>{
            assert.throw(() => flowerShop.calcPriceOfFlowers('test','test',1), 'Invalid input!');
        });
        it('should throw an error when the 3 input is invallid', ()=>{
            assert.throw(() => flowerShop.calcPriceOfFlowers('test', 1,'test'), 'Invalid input!');
        });

        //valid input
        it('should return the price of the flower', ()=>{
            assert.equal(flowerShop.calcPriceOfFlowers('test', 2 ,3),'You need $6.00 to buy test!' );
        });
    });
    describe('checkFlowersAvailable function tests', ()=>{
        it('should return the price of the flower', ()=>{
            assert.equal(flowerShop.checkFlowersAvailable('test', ['Orhid', 'test', 'rose']),'The test are available!');
        });
        it('should return the price of the flower', ()=>{
            assert.equal(flowerShop.checkFlowersAvailable('test', ['Orhid', 'rose']),`The test are sold! You need to purchase more!`)
        });
        it('should return the price of the flower', ()=>{
            assert.equal(flowerShop.checkFlowersAvailable('test', []),`The test are sold! You need to purchase more!`)
        });
    });
    describe('sellFlowers function tests', ()=>{
        it('should throw an error when the 1 input is invallid', ()=>{
            assert.throw(() => flowerShop.sellFlowers('str', 10), 'Invalid input!');
        });
        it('should throw an error when the 2 input is invallid', ()=>{
            assert.throw(() => flowerShop.sellFlowers([], 'str'), 'Invalid input!');
        });
        it('should throw an error when the 3 input is invallid', ()=>{
            assert.throw(() => flowerShop.sellFlowers(['test', 'rose', 'orhid'], 3), 'Invalid input!');
        });
        it('should throw an error when the 3 input is invallid', ()=>{
            assert.throw(() => flowerShop.sellFlowers(['test', 'rose', 'orhid'], -3), 'Invalid input!');
        });
        it('should throw an error when the 3 input is invallid', ()=>{
            assert.throw(() => flowerShop.sellFlowers(['test', 'rose', 'orhid'], 5), 'Invalid input!');
        });
        it('should throw an error when the 3 input is invallid', ()=>{
            assert.equal(flowerShop.sellFlowers(['test', 'rose', 'orhid'], 0), 'rose / orhid');
        });
        it('should throw an error when the 3 input is invallid', ()=>{
            assert.equal(flowerShop.sellFlowers(['test'], 0), '');
        });
    });
});