const expect = require('chai').expect;
const {sum, comparePositive, compareNegative, division, sub, allUpper, allLower, solution, multiply} = require('../index.js');


describe('CALC SUM AND SUB', function () {

    it('calc sum with positive numbers', function () {
        expect(sum(4, 4)).equal(8);
    });

    it('calc sum with negative numbers', function () {
        expect(sum(-4, -4)).equal(-8);
    });

    it('Subtraction with positive numbers', function () {
        expect(sub(85, 15)).eql(70);
    });

});

describe('ALL UPPER', () => {
    it('input all upper cases', function () {
        expect(allUpper(['a', 'abc'])).eql(['A', 'ABC']);
    });
    it('input all lower cases', function () {
        expect(allLower(['A', 'ABC'])).eql(['a', 'abc']);
    });
})

describe('REVERSE A STRING', () => {
    it('String reverse', function () {
        expect(solution('McDonalds')).eql('sdlanoDcM');
    })
});

describe('MULTIPLY AND DIVISION 2 NUMBERS', () => {
    it('Multiply 2 numbers', () => {
        expect(multiply(50, 2)).eql(100);
    })
    it('Division 2 numbers', () => {
        expect(division(60, 2)).eql(30);
    })
})

describe('COMPARE 2 NUMBERS', () => {
    it('Compare positive', () => {
        expect(comparePositive(10, 5)).eql(true);
    })
    it('Compare negative', function () {
        expect(compareNegative(8, 4)).eql(false);
    });
})