const library = require("./03Library");
const {assert} = require("chai");

describe('library function tests', ()=>{
    describe('calcPriceOfBook function tests', ()=>{
        it('should throw an error when the 1 parameter is not a string', ()=>{
            assert.throw(() => library.calcPriceOfBook(12,21), "Invalid input");
        });
        
        it('should throw an error when the 2 parameter is not a string', ()=>{
            assert.throw(() => library.calcPriceOfBook('str','str'), "Invalid input");
        });
        it('should throw an error when both parameters are not valid', ()=>{
            assert.throw(() => library.calcPriceOfBook([],[]), "Invalid input");
        });

        it('should return 20 when the book is after 1980', ()=>{
            assert.equal(library.calcPriceOfBook('book', 2000), `Price of book is 20.00`);
        });
        it('should return 10 when the book is before 1980', ()=>{
            assert.equal(library.calcPriceOfBook('book', 1970), `Price of book is 10.00`);
        });
        it('should return 10 when the book is equal to 1980', ()=>{
            assert.equal(library.calcPriceOfBook('book', 1980), `Price of book is 10.00`);
        });

        describe('findBook function tests', ()=>{
            it('should throw an error when the array is empty', ()=>{
                assert.throw(() => library.findBook([], 'book'), "No books currently available");
            });
            it('should return the book when it is present in the array', ()=>{
                assert.equal(library.findBook(['book', 'novel', 'poem'], 'novel'), "We found the book you want.");
            });
            it('should return the book when it is present in the array', ()=>{
                assert.equal(library.findBook(['book', 'novel', 'poem'], 'sth'), "The book you are looking for is not here!");
            });
        });

        describe('arrangeTheBooks function tests', ()=>{
            it('should throw an error when the input is negative num', ()=>{
                assert.throw(() => library.arrangeTheBooks(-10), "Invalid input");
            });
            it('should throw an error when the input is not an integer', ()=>{
                assert.throw(() => library.arrangeTheBooks(10.3), "Invalid input");
            });
            it('should throw an error when the input NaN', ()=>{
                assert.throw(() => library.arrangeTheBooks('book'), "Invalid input");
            });

            it('should return more shelves if the books are more than 40', ()=>{
                assert.equal(library.arrangeTheBooks(41), "Insufficient space, more shelves need to be purchased.");
            });
            it('should return great job if the books are equal to 40', ()=>{
                assert.equal(library.arrangeTheBooks(40), "Great job, the books are arranged.");
            });
            it('should return more shelves if the books are less than 40', ()=>{
                assert.equal(library.arrangeTheBooks(8), "Great job, the books are arranged.");
            });
        });
});
});