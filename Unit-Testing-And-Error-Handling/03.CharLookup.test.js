const lookupChar = require('./03.CharLookup');
const {assert} = require('chai');

describe('lookupChar function tests', ()=>{
    //valid input
    it('Return char at index', ()=>{
        assert.equal(lookupChar('Love', 1), 'o');
    });

    it('Return char at index', ()=>{
        assert.equal(lookupChar('L', 0), 'L');
    });

    //invalid index value
    it('Return incorrect index when the index is grater than string length', ()=>{
        assert.equal(lookupChar('Love', 10), 'Incorrect index');
    });

    it('Return incorrect index when the index is a negative number', ()=>{
        assert.equal(lookupChar('Love', -10), 'Incorrect index');
    });

    it('Empty string as input', ()=>{
        assert.equal(lookupChar('', 0), 'Incorrect index');
    });

    //invalid input
    it('Return undefined when the first parameter is not a string', ()=>{
        assert.equal(lookupChar(10, 0), undefined);
    });

    it('Return undefined when the second parameter is not an integer', ()=>{
        assert.equal(lookupChar('Love', 2.5), undefined);
    });

    it('Return undefined when thetwo parameters are wrong', ()=>{
        assert.equal(lookupChar([], '10.5'), undefined);
    });
})