/**
 * @param {number} num
 * @return {number}
 */
const addDigits = (num) => {
  let sum = 0;
  while(num) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum > 9 ? addDigits(sum) : sum;
};