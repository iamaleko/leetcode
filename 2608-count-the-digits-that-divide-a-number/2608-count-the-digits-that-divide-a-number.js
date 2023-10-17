/**
 * @param {number} num
 * @return {number}
 */
const countDigits = (num) => {
  let n = num, cnt = 0;
  while (n) {
    if (num % (n % 10) === 0) ++cnt;
    n = Math.floor(n / 10);
  }
  return cnt;
};