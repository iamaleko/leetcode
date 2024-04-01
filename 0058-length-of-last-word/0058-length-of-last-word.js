/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => {
  let l, r = s.length;
  while (s[--r] === ' ');
  l = r;
  while (l >= 0 && s[--l] !== ' ');
  return r - l;
};