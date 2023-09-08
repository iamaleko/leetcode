/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = (pattern, s) => {
  const r = new Map(), l = new Map();
  s = s.split` `.map((word, i) => {
    if (!r.has(word) && !l.has(pattern[i])) {
      r.set(word, pattern[i]);
      l.set(pattern[i], word);
      return pattern[i];
    } else if (r.get(word) === pattern[i] && l.get(pattern[i]) === word) {
      return pattern[i];
    } else {
      return '.';
    }
  }).join``;
  return s === pattern;
};