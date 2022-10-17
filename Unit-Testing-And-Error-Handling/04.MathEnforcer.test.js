const mathEnforcer = require("./04.MathEnforcer");
const {assert} = require('chai');

describe('mathEnforcer function tests', ()=>{
    describe('addFive function tests', ()=>{

        //incorrect input tests
        it('Should return undefined with a string', ()=>{
            assert(mathEnforcer.addFive('test')===undefined);
        });

        it('Should return undefined with an object', ()=>{
            assert(mathEnforcer.addFive({})===undefined);
        });

        it('Should return undefined with an array', ()=>{
            assert(mathEnforcer.addFive([])===undefined);
        });

        it('Should return undefined with undefined', ()=>{
            assert(mathEnforcer.addFive(undefined)===undefined);
        });

        it('Should return undefined with null', ()=>{
            assert(mathEnforcer.addFive(null)===undefined);
        });

        //tests with valid input
        it('Positive integer number +5', ()=>{
            assert(mathEnforcer.addFive(1)===6);
        });

        it('Negative number +5', ()=>{
            assert(mathEnforcer.addFive(-1)===4);
        });

        it('Decimal number +5', ()=>{
            assert(mathEnforcer.addFive(1.5)===6.5);
        });
    });

    describe('subtractTen function tests', ()=>{

        //incorrect input tests
        it('Should return undefined with a string', ()=>{
            assert(mathEnforcer.subtractTen('test')===undefined);
        });

        it('Should return undefined with an object', ()=>{
            assert(mathEnforcer.subtractTen({})===undefined);
        });

        it('Should return undefined with an array', ()=>{
            assert(mathEnforcer.subtractTen([])===undefined);
        });

        it('Should return undefined with undefined', ()=>{
            assert(mathEnforcer.subtractTen(undefined)===undefined);
        });

        it('Should return undefined with null', ()=>{
            assert(mathEnforcer.subtractTen(null)===undefined);
        });

        //tests with valid input
        it('Positive integer number -10', ()=>{
            assert(mathEnforcer.subtractTen(1)===-9);
        });

        it('Negative number -10', ()=>{
            assert(mathEnforcer.subtractTen(-1)===-11);
        });

        it('Decimal number -10', ()=>{
            assert(mathEnforcer.subtractTen(1.5)===-8.5);
        });
    });

    describe('SumOfTwoNumbers function tests', ()=>{

        //tests with valid input
        it('Two positive numbers',()=>{
            assert(mathEnforcer.sum(1,2)===3);
        });

        it('Two negative numbers', ()=>{
            assert(mathEnforcer.sum(-1,-2)===-3);
        });

        it('Two decimal numbers', ()=>{
            assert(mathEnforcer.sum(10.4, 1.1)===11.5);
        });

        //incorrect input tests
        it('First parameter is a string, the second is a number', ()=>{
            assert(mathEnforcer.sum('10', 1)===undefined);
        });

        it('First parameter is a number, the second is a string', ()=>{
            assert(mathEnforcer.sum(10, '1')===undefined);
        });
    });
});