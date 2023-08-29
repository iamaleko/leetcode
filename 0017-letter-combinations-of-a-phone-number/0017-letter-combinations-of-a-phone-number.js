/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function(digits) {
  const res = [];
  const dict = [,, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  const build = (prefix, digits) => {
    const digit = digits % 10;
    digits = Math.floor(digits / 10);
    for (const char of dict[digit]) {
      if (digits) {
        build(char + prefix, digits);
      } else {
        res.push(char + prefix);
      }
    }
  }
  digits && build('', digits);
  return res;
};