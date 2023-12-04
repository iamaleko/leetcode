/**
 * @param {string} num
 * @return {string}
 */
const largestGoodInteger = (num) => {
  let max = '';
  for (let i = 2; i < num.length; ++i) {
    if (
      num[i] === num[i - 1] &&
      num[i] === num[i - 2] &&
      num[i] > max
    ) {
      max = num[i];
      if (max === '9') break;
    }
  }
  return max + max + max;
};