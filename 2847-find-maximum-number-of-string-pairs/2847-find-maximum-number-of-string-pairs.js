/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
  const set = new Set();
  let cnt = 0;
  for (const i in words) {
    if (set.has(words[i])) {
      ++cnt;
    } else {
      set.add(words[i].split('').reverse().join(''));
    }
  }
  return cnt;
};