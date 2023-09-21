/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const truncateSentence = (s, k) => {
  let i = 0;
  for (;i < s.length; ++i) if (s[i] === ' ' && !--k) break;
  return s.substring(0, i);
};