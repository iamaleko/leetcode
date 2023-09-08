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
    if (!r.has(s[i]) && !l.has(pattern[i])) {
      r.set(s[i], pattern[i]);
      l.set(pattern[i], s[i]);
    } else if (r.get(s[i]) !== pattern[i] || l.get(pattern[i]) !== s[i]) {
      return false;
    }
  };
  return true;
};