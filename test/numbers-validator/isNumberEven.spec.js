const { expect } = require('chai');
const { describe, beforeEach, it } = require('mocha');
const NumbersValidator = require('/Users/Paulina_Piotrowska/Desktop/Automation in JS Self-paced Program/Automation in JS/unit-testing-example/app/numbers-validator.js');

describe('isNumberEven', function () {
  let validator;

  beforeEach(function () {
    validator = new NumbersValidator();
  });

  afterEach(function () {
    validator = null;
  });

  it('should return true if number is even', function () {
    expect(validator.isNumberEven(4)).to.be.equal(true);
  });
});
