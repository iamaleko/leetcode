/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
const countCharacters = (words, chars) => {
  const map = new Map();
  for (const char of chars) map.set(char, (map.get(char) ?? 0) + 1);
                                    
  let sum = 0;
  upper: for (const word of words) {
    const _map = new Map(map);
    for (const char of word) {
      let val = _map.get(char) ?? 0;
      if (val) {
        _map.set(char, val - 1)
      } else {
        continue upper;
      }
    }
    
    sum += word.length;
  } 
  
  return sum;
};