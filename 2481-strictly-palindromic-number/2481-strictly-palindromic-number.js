/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function(n) {
  const toBase = (n, base) => {
    let res = '';
    while (n >= base) {
      res = (n % base) + res;
      n = (n - (n % base)) / base;
    }
    return n + '' + res;
  }

  const isPalindromic = (str) => {
    let a = 0, b = str.length - 1;
    while (a < b) if (str[a++] !== str[b--]) return false;
    return true;
  }

  let base = n - 2;
  while (base > 1) {
    if (!isPalindromic(toBase(n, base--))) return false;
  }
  return true;
};