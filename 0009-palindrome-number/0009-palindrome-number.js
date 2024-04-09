/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  if (x < 0) return false;
  let n = 0, j = x;
  while (j) {
    n += j % 10;
    n *= 10;
    j = j / 10 | 0;
  }
  return n / 10 === x;
};