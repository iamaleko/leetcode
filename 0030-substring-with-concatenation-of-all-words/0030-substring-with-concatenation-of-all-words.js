/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
const findSubstring = (s, words) => {
  const size = words.length;
  const chunk = words[0].length;
  const map = {};
  const res = [];
  for (const word of words) {
    word in map ? ++map[word] : map[word] = 1;
  }
  for (let i = 0; i <= (s.length - size * chunk); ++i) {
    if (s.substr(i,chunk) in map) {
      const _map = {...map};
      let _size = size;
      for (let ii = i; ii < i + size * chunk; ii += chunk) {
        const _word = s.substr(ii,chunk);
        if (_map[_word]) {
          --_map[_word];
          --_size;
        } else {
          break;
        }
      }
      if (!_size) {
        res.push(i);
      }
    }
  }
  return res;
};