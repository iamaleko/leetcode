/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  if (!s && !t) return true;
  let pointer = 0;
  for (const char of t) {
    if (s[pointer] === char) ++pointer;
    if (pointer === s.length) return true;
  }
  return false;
};