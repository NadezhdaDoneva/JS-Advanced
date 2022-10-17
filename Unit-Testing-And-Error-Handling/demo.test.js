const sumOfTwoNum = require('./demo.js');
const {assert} = require('chai');

describe('sumOfTwoNum function test', ()=>{
    
    it('test with two numbers', ()=>{
        assert.equal(sumOfTwoNum(3,4), 7);
    });
});