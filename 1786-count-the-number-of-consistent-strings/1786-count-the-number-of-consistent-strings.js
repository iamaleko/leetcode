/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
const countConsistentStrings = (allowed, words) => {
  const map = {};
  let cnt = 0;
  for (const char of allowed) map[char] = 1;
  outer: for (const word of words) {
    for (const char of word) {
      if (!(char in map)) continue outer;
    }
    ++cnt;
  }
  return cnt;
};