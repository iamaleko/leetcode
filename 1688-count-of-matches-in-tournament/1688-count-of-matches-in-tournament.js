/**
 * @param {number} n
 * @return {number}
 */
const numberOfMatches = (n) => {
  let cnt = 0;
  while (n > 1) {
    cnt += Math.floor(n / 2);
    n = Math.ceil(n / 2);
  }
  return cnt;
};