/**
 * @param {string} word
 * @return {boolean}
 */
const detectCapitalUse = (word) => {
  if (word.length === 1) return true;
  
  const caps = s => s.charCodeAt(0) < 91;
  switch(caps(word[0]) ? (caps(word[1]) ? 1 : 3) : 2) {
    case 1: for (let i = 2; i < word.length; ++i) if (!caps(word[i])) return false; break;
    case 2:case 3: for (let i = 1; i < word.length; ++i) if (caps(word[i])) return false; break;
  }
  
  return true;
};