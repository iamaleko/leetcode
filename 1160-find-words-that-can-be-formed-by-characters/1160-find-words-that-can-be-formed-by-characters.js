/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
const countCharacters = (words, chars) => {
  const charsMap = new Map();
  for (const char of chars) {
    charsMap.set(char, (charsMap.get(char) ?? 0) + 1);
  }
                                    
  let sum = 0, val;
  words: for (const word of words) {
    const wordMap = new Map(charsMap);
    
    for (const char of word) {
      if (val = wordMap.get(char)) {
        wordMap.set(char, val - 1)
      } else {
        continue words;
      }
    }
    
    sum += word.length;
  } 
  
  return sum;
};