/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
const differenceOfSums = (n, m) => {
  let a = 0, b = 0;
  while (n) {
    if (n % m) {
      a += n;
    } else {
      b += n;
    }
    --n;
  }
  return a - b;
};