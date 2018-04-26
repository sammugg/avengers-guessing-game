/**
 * Returns a random character from the array passed in using Math.random()
 *
 * @param characters - an array of strings
 * @returns {String} random entry from input array
 */
const getRandomCharacter = (characters) => {
  if (!characters || characters.length === 0) {
    return null;
  }

  return characters[Math.floor(Math.random() * characters.length)];
};

/**
 * Compares the user input to the computer selected answer and returns a String
 * representing the result.
 *
 * If Correct, returns: Hooray! ${computer answer} survived the Infinity War!
 * If Incorrect, returns: Oh no! ${user answer} didn't make it! Hope they weren't your favorite...
 *
 * @param {String} userInput - a string representing a guess by the user
 * @param {String} computerAnswer - a string representing the correct answer generated by the computer
 * @returns {String} the human readable string used to notify the user of the status of their guess
 */
const checkGuessAgainstComputer = (userInput, computerAnswer) => {
  // if (!userInput || !computerAnswer) {
  //   return;
  // }

  // if (userInput === computerAnswer) {
  //   return `Hooray! ${computerAnswer} survived the Infinity War!`;
  // } else {
  //   return `Oh no! ${userInput} didn't make it! Hope they weren't your favorite...`;
  // }

  if (userInput && computerAnswer) {
    if (userInput === computerAnswer) {
      return `Hooray! ${computerAnswer} survived the Infinity War!`;
    } else {
      return `Oh no! ${userInput} didn't make it! Hope they weren't your favorite...`;
    }
  }
};

export default {
  getRandomCharacter ,
  checkGuessAgainstComputer
};