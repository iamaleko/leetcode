/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
  const map = {};
  let cnt = 0;
  for (const i in words) {
    const word = words[i].split('').reverse().join('');
    map[word] = i;
  }
  for (const i in words) {
    if (words[i] in map && map[words[i]] !== i) {
      ++cnt;
    }
  }
  return cnt / 2;
};