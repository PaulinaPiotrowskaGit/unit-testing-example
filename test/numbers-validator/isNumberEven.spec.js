import {NumbersValidator} from '../../app/numbers-validator.js';
import {expect} from 'chai';

describe('isNumberEven positive tests', () => {
    let validator;
    beforeEach(() => {
        validator = new NumbersValidator();
    });

    it('should return true when provided with an even number', () => {
        const validationResults = validator.isNumberEven(4);
        expect(validationResults).to.be.equal(true);
    });
});

// import {NumbersValidator} from '../../app/numbers-validator.js';
// import {expect} from 'chai';
// const {describe, beforeEach, it} = require('mocha');

// describe('isNumberEven', function() {
//   let validator;

//   beforeEach(function () {
//     validator = new NumbersValidator();
//   });

//   afterEach(function () {
//     validator = null;
//   });

//   it('should return true if number is even', function () {
//     expect(validator.isNumberEven(4)).to.be.equal(true);
//   });
// });
