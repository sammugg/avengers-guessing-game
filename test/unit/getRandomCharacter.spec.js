/* global describe, it, expect */
/* jshint -W079, expr:true */

// Get Test file
import helpers from '../../src/helpers.js';
let expect = require('chai').expect;

describe('TDD Guessing Game | getRandomCharacter()', () => {
  let testInput = ['Hello', 'World'];

  it('should return null if characters array is undefined', () => {
    expect(helpers.getRandomCharacter(undefined)).to.equal(null);
  });

  it('should return null if characters array is empty', () => {
    expect(helpers.getRandomCharacter([])).to.equal(null);
  });

  it('should return a string if array is populated', () => {
    expect(typeof helpers.getRandomCharacter(testInput)).to.equal('string');
  });

  it('should return one of the provided characters if array is populated', () => {
    expect(helpers.getRandomCharacter(testInput)).to.be.oneOf(testInput);
  });
});