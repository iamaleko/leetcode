/**
 * @param {number} num
 * @return {number}
 */
const minimumSum = (num) => {
  num = (num + '').split('').sort((a,b) => a - b);
  let a = '', b = '';
  for (const i in num) i%2 ? a+=num[i] : b+=num[i];
  return +a + (+b);
};