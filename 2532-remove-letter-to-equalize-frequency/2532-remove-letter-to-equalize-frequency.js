/**
 * @param {string} word
 * @return {boolean}
 */
const equalFrequency = function(word) {
  const map = {};
  for (let i = 0; i < word.length; ++i) {
    if (word[i] in map) {
      ++map[word[i]];
    } else {
      map[word[i]] = 1;
    }
  }
  const freq = {};
  for (char in map) {
    if (freq[map[char]]) {
      ++freq[map[char]]
    } else {
      freq[map[char]] = 1;
    }
  }
  
  const entries = Object.entries(freq);
  if (
    entries.length === 1 &&
    (entries[0][0] === '1' || entries[0][1] === 1)
  ) return true;
  if (
    entries.length === 2 && (
      (entries[0][0] - entries[1][0] === 1 && entries[0][1] === 1) ||
      (entries[1][0] - entries[0][0] === 1 && entries[1][1] === 1)
    )
  ) return true;
  if (
    entries.length === 2 && 
    (entries[0][0] === '1' && entries[0][1] === 1 || entries[1][0] === '1' && entries[1][1] === 1)
  ) return true;

  return false;
};