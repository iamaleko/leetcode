/**
 * @param {number} num
 * @return {number}
 */
const maximum69Number  = (num) => {
  num = String(num).split('');
  for (const i in num) {
    if (num[i] === '6') {
      num[i] = '9';
      break;
    }
  }
  return num.join('');
};