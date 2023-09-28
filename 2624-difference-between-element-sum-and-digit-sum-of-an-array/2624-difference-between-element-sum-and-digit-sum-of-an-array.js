/**
 * @param {number[]} nums
 * @return {number}
 */
const differenceOfSum = (nums) => {
  let a = 0, b = 0;
  for (let n of nums) {
    a += n;
    while (n) {
      b += n % 10;
      n = Math.floor(n / 10);
    }
  }
  return a - b;
};