/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
  const map = {};
  let cnt = 0;
  for (const i in words) {
    if (words[i] in map) {
      ++cnt;
    } else {
      map[words[i].split('').reverse().join('')] = i;
    }
  }
  return cnt;
};