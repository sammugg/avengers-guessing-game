/* global describe, it, expect */
/* jshint -W079, expr:true */

// Get Test file
import helpers from '../../src/helpers.js';
let expect = require('chai').expect;

describe('TDD Guessing Game | checkGuessAgainstComputer()', () => {
  let testGoodGuess = 'Foo';
  let testBadGuess = 'Bar';

  it('should return undefined if computer answer is undefined', () => {
    expect(helpers.checkGuessAgainstComputer(testGoodGuess, undefined)).to.equal(undefined);
  });

  it('should return undefined if computer answer is an empty string', () => {
    expect(helpers.checkGuessAgainstComputer(testGoodGuess, '')).to.equal(undefined);
  });

  it('should return undefined if user guess is undefined', () => {
    expect(helpers.checkGuessAgainstComputer(undefined, testGoodGuess)).to.equal(undefined);
  });

  it('should return a string', () => {
    expect(typeof helpers.checkGuessAgainstComputer(testGoodGuess, testGoodGuess)).to.equal('string');
  });

  it('should return the positive response if user guesses correctly', () => {
    expect(helpers.checkGuessAgainstComputer(testGoodGuess, testGoodGuess)).to.equal(`Hooray! ${testGoodGuess} survived the Infinity War!`);
  });

  it('should return the negatory response if user guesses incorrectly', () => {
    expect(helpers.checkGuessAgainstComputer(testBadGuess, testGoodGuess)).to.equal(`Oh no! ${testBadGuess} didn't make it! Hope they weren't your favorite...`);
  });
});