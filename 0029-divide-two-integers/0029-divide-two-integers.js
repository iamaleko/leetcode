const divide = function(dividend, divisor) {
  if (dividend === 0) return 0;
  const sign = dividend < 0 && divisor > 0 || dividend > 0 && divisor < 0 ? -1 : 1;
  if (dividend < 0) dividend = -dividend;
  if (divisor < 0) divisor = -divisor;
  if (dividend < divisor) return 0;

  dividend = (dividend + '').split('').reverse();
  
  let res = '', part = dividend.pop(), count, left = '', zeroes = '';
  while (true) {
    if (+part >= divisor) {
      count = 0;
      while (+part >= divisor) {
        part -= divisor;
        ++count;
      }
      res += count;
      left = part = '' + part;
      zeroes = '';
    } else if (dividend.length) {
      if (!+left && +part) res += 0;
      part += dividend.pop();
      zeroes += '0';
    } else {
      res += zeroes;
      break;
    }
  }

  // fix for the test error
  if (sign > 0 && res > 2147483647) res = 2147483647;

  return sign < 0 ? -res : +res;
};