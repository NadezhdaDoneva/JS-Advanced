const bookSelection = require("./BookSelection");
const {assert} = require("chai");

describe('bookSelection function test', ()=>{
    describe('isGenreSuitable function test',()=>{

        it('should return not suitable for kids when the age is less than 12', ()=>{
            assert.equal(bookSelection.isGenreSuitable('Thriller', 10),  `Books with Thriller genre are not suitable for kids at 10 age`);
        });
        it('should return not suitable for kids when the age is equal to 12', ()=>{
            assert.equal(bookSelection.isGenreSuitable('Thriller', 12),  `Books with Thriller genre are not suitable for kids at 12 age`);
        });

        it('should return not suitable for kids when the age is less than 12', ()=>{
            assert.equal(bookSelection.isGenreSuitable('Horror', 10),  `Books with Horror genre are not suitable for kids at 10 age`);
        });
        it('should return not suitable for kids when the age is equal to 12', ()=>{
            assert.equal(bookSelection.isGenreSuitable('Horror', 12),  `Books with Horror genre are not suitable for kids at 12 age`);
        });

        it('should return not suitable for kids when the age is larger than 12', ()=>{
            assert.equal(bookSelection.isGenreSuitable('Horror', 13),  `Those books are suitable`);
        });
        it('should return not suitable for kids when the age is larger than 12', ()=>{
            assert.equal(bookSelection.isGenreSuitable('Thriller', 13),  `Those books are suitable`);
        });

        it('should return not suitable for kids when the age is larger than 12', ()=>{
            assert.equal(bookSelection.isGenreSuitable('Test', 10),  `Those books are suitable`);
        });
    });

    describe('isItAffordable function test', ()=>{
        it('should throw an error when the input is invallid', ()=>{
            assert.throw(() => bookSelection.isItAffordable("100", 10), 'Invalid input');
        });
        it('should throw an error when the input is invallid', ()=>{
            assert.throw(() => bookSelection.isItAffordable(100, "10"), 'Invalid input');
        });

        it('should return that the book is affordable if the difference is 0', ()=>{
            assert.equal(bookSelection.isItAffordable(100,100),'Book bought. You have 0$ left' );
        });
        it('should return that the book is affordable if the difference is greater than 0', ()=>{
            assert.equal(bookSelection.isItAffordable(10,100),'Book bought. You have 90$ left' );
        });
        it('should return that the book is not affordable if the difference is lower than 0', ()=>{
            assert.equal(bookSelection.isItAffordable(110,100),`You don't have enough money` );
        });
    });

    describe ('suitableTitles function test', ()=>{
        it('shoul throw an error if the first parameter is not an array', ()=>{
            assert.throw(()=> bookSelection.suitableTitles('test', 'test'), "Invalid input");
        });
        it('shoul throw an error if the second parameter is not a string', ()=>{
            assert.throw(()=> bookSelection.suitableTitles([], 10), "Invalid input");
        });

        it('should return the wright value if the input is valid', ()=>{
            assert.equal(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], "Thriller"), "The Da Vinci Code")
        });
        it('should return the wright value if the input is valid', ()=>{
            assert.equal(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], "test"), "");
        });
        it('should return the wright value if the input is valid', ()=>{
            assert.equal(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }, {title:"test", genre:"Thriller"}], "The Da Vinci Code, test"), "");
        });
        describe('bookSelection function test', ()=>{
            describe('isGenreSuitable function test',()=>{
        
                it('should return not suitable for kids when the age is less than 12', ()=>{
                    assert.equal(bookSelection.isGenreSuitable('Thriller', 10),  `Books with Thriller genre are not suitable for kids at 10 age`);
                });
                it('should return not suitable for kids when the age is equal to 12', ()=>{
                    assert.equal(bookSelection.isGenreSuitable('Thriller', 12),  `Books with Thriller genre are not suitable for kids at 12 age`);
                });
        
                it('should return not suitable for kids when the age is less than 12', ()=>{
                    assert.equal(bookSelection.isGenreSuitable('Horror', 10),  `Books with Horror genre are not suitable for kids at 10 age`);
                });
                it('should return not suitable for kids when the age is equal to 12', ()=>{
                    assert.equal(bookSelection.isGenreSuitable('Horror', 12),  `Books with Horror genre are not suitable for kids at 12 age`);
                });
        
                it('should return not suitable for kids when the age is larger than 12', ()=>{
                    assert.equal(bookSelection.isGenreSuitable('Horror', 13),  `Those books are suitable`);
                });
                it('should return not suitable for kids when the age is larger than 12', ()=>{
                    assert.equal(bookSelection.isGenreSuitable('Thriller', 13),  `Those books are suitable`);
                });
        
                it('should return not suitable for kids when the age is larger than 12', ()=>{
                    assert.equal(bookSelection.isGenreSuitable('Test', 10),  `Those books are suitable`);
                });
            });
        
            describe('isItAffordable function test', ()=>{
                it('should throw an error when the input is invallid', ()=>{
                    assert.throw(() => bookSelection.isItAffordable("100", 10), 'Invalid input');
                });
                it('should throw an error when the input is invallid', ()=>{
                    assert.throw(() => bookSelection.isItAffordable(100, "10"), 'Invalid input');
                });
        
                it('should return that the book is affordable if the difference is 0', ()=>{
                    assert.equal(bookSelection.isItAffordable(100,100),'Book bought. You have 0$ left' );
                });
                it('should return that the book is affordable if the difference is greater than 0', ()=>{
                    assert.equal(bookSelection.isItAffordable(10,100),'Book bought. You have 90$ left' );
                });
                it('should return that the book is not affordable if the difference is lower than 0', ()=>{
                    assert.equal(bookSelection.isItAffordable(110,100),`You don't have enough money` );
                });
            });
        
            describe ('suitableTitles function test', ()=>{
                it('shoul throw an error if the first parameter is not an array', ()=>{
                    assert.throw(()=> bookSelection.suitableTitles('test', 'test'), "Invalid input");
                });
                it('shoul throw an error if the second parameter is not a string', ()=>{
                    assert.throw(()=> bookSelection.suitableTitles([], 10), "Invalid input");
                });
        
                it('should return the wright value if the input is valid', ()=>{
                    assert.equal(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], "Thriller"), "The Da Vinci Code")
                });
                it('should return the wright value if the input is valid', ()=>{
                    assert.equal(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], "test"), "");
                });
                it('should return the wright value if the input is valid', ()=>{
                    assert.equal(bookSelection.suitableTitles([{}], ''), "");
                });
            });
        });
    });
});