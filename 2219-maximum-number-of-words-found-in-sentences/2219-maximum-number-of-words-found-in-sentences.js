/**
 * @param {string[]} sentences
 * @return {number}
 */
const mostWordsFound = (arr) => {
  let max = 0;
  for (const str of arr) {
    let spaces = 0;
    for (const char of str) {
      if (char === ' ') ++spaces;
    }
    if (max < spaces) max = spaces;
  }
  return max + 1;
};