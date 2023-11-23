/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
const reversePrefix = (word, ch) => {
  let i = word.indexOf(ch);
  if (~i) {
    ++i;
    return word.substring(0, i).split('').reverse().join('') + word.substring(i);
  }
  return word;
};