// get list of all 5 letter words
const allWords = require('./words');
// has these letters
const hasLetters = ['r','a','h']; 
// must not has these letters
const mustNotHaveLetters = ['c','f','t','s','k','b','o'];
// must have selected letters in these positions
const mustHaveLettersInPosition = ['h','a',,'r','y'];
// not in these positions
const mustNotHaveLettersInPosition = ['a',,'h',,];

const containsLetter = (word, letter, checkNotContains = false) => {
  return checkNotContains ? !word.includes(letter) : word.includes(letter);
}

const hasLetterInPosition = (word, letter, position) => {
  if (letter === undefined) return true;

  return word[position] === letter;
}

const filteredWords = allWords.filter(word => {
  return hasLetters.every(letter => containsLetter(word, letter)) &&
  mustNotHaveLetters.every(letter => containsLetter(word, letter, true)) &&
  mustHaveLettersInPosition.every((letter, index) => hasLetterInPosition(word, letter, index)) &&
  mustNotHaveLettersInPosition.every((letter, index) => letter === undefined ? true : !hasLetterInPosition(word, letter, index));
})

console.log(filteredWords);
console.log('possible words', filteredWords.length);
