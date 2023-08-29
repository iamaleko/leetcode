/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {
  const res = [];
  const dict = [,, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  const build = (prefix, digits) => {
    const str = dict[digits % 10];
    digits = Math.floor(digits / 10);
    for (const char of str) {
      digits ? build(char + prefix, digits) : res.push(char + prefix);
    }
  }
  digits && build('', digits);
  return res;
};