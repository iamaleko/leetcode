/**
 * @param {string} num
 * @return {string}
 */
const largestOddNumber = (num) => {
  let i = num.length;
  while (--i > -1) if (
    num[i] === '1' ||
    num[i] === '3' ||
    num[i] === '5' ||
    num[i] === '7' ||
    num[i] === '9'
  ) break;
  return num.substring(0, i + 1);
};