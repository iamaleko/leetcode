/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
  const set = new Set();
  let cnt = 0;
  for (const word of words) {
    if (set.has(word)) {
      ++cnt;
    } else {
      set.add(word[1] + word[0]);
    }
  }
  return cnt;
};