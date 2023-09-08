/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = (pattern, s) => {
  s = s.split` `;
  if (pattern.length !== s.length) return false;
  const r = new Map(), l = new Map();
  for (const i in s) {
    const word = s[i];
    if (!r.has(word) && !l.has(pattern[i])) {
      r.set(word, pattern[i]);
      l.set(pattern[i], word);
    } else if (r.get(word) !== pattern[i] || l.get(pattern[i]) !== word) {
      return false;
    }
  };
  return true;
};