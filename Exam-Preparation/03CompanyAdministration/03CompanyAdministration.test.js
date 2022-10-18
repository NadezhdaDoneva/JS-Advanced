const companyAdministration = require("./03CompanyAdministration");
const {assert} = require("chai");

describe('companyAdministration function tests', ()=>{
    describe('hiringEmployee function tests', ()=>{
        it('should throw an error if the possition is different from programmer', ()=>{
            assert.throw(() => companyAdministration.hiringEmployee('Test', 'Testing', '4'), 'We are not looking for workers for this position.');
        });
        it('should return not approved if the experiece is lower than 3', ()=>{
            assert.equal(companyAdministration.hiringEmployee('Test', 'Programmer', 1),  `Test is not approved for this position.`
            );
        });
        it('should return not approved if the experiece equal to 3', ()=>{
            assert.equal(companyAdministration.hiringEmployee('Test', 'Programmer', 3),  `Test was successfully hired for the position Programmer.`
            );
        });
        it('should return not approved if the experiece greather than 3', ()=>{
            assert.equal(companyAdministration.hiringEmployee('Test', 'Programmer', 4),  `Test was successfully hired for the position Programmer.`
            );
        });
    });

    describe('calculateSalary function tests', ()=>{
        //invalid input
        it('should throw an error if the possition is different from programmer', ()=>{
            assert.throw(() => companyAdministration.calculateSalary('test'), 'Invalid hours');
        });
        it('should throw an error if the possition is different from programmer', ()=>{
            assert.throw(() => companyAdministration.calculateSalary(-3), 'Invalid hours');
        });
        //valid input
        it('should return correct value if hours are less than 160', ()=>{
            assert.equal(companyAdministration.calculateSalary(4),  60);
        });
        it('should return correct value if hours are more than 160', ()=>{
            assert.equal(companyAdministration.calculateSalary(200),  4000);
        });
        it('should return correct value if hours are equal to 160', ()=>{
            assert.equal(companyAdministration.calculateSalary(160),  2400);
        });
    });

    describe('firedEmployee function tests', ()=>{
        it('should throw an error if the possition is different from programmer', ()=>{
            assert.throw(() => companyAdministration.firedEmployee(3, 3), 'Invalid input');
        });
        it('should throw an error if the possition is different from programmer', ()=>{
            assert.throw(() => companyAdministration.firedEmployee([], 'str'), 'Invalid input');
        });
        it('should throw an error if the possition is different from programmer', ()=>{
            assert.throw(() => companyAdministration.firedEmployee('str', 'str'), 'Invalid input');
        });
        it('should throw an error if the possition is different from programmer', ()=>{
            assert.throw(() => companyAdministration.firedEmployee(['Test', 'Ivan', 'Pesho'], 3), 'Invalid input');
        });
        it('should throw an error if the possition is different from programmer', ()=>{
            assert.throw(() => companyAdministration.firedEmployee(['Test', 'Ivan', 'Pesho'], -3), 'Invalid input');
        });
        it('should throw an error if the possition is different from programmer', ()=>{
            assert.equal(companyAdministration.firedEmployee(['Test', 'Ivan', 'Pesho'], 0), 'Ivan, Pesho');
        });
    });
});