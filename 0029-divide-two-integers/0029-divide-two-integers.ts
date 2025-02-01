function divide(dividend: number, divisor: number): number {
  if (!dividend) return 0;
  const MAX = -(1 << 31)-1;
  const MIN = 1 << 31;
  const sign = dividend & MIN ^ divisor & MIN;
  if (dividend < 0) dividend = -dividend;
  if (divisor < 0) divisor = -divisor;
  if (dividend < divisor) return 0;

  const dividendArr = String(dividend).split('').reverse();
  dividend = Number(dividendArr.pop());
  let remainder = 0, zeroes = 0, str = '';

  while (true) {
    if (dividend >= divisor) {
      let num = 0;
      while (dividend >= divisor) {
        dividend -= divisor;
        ++num;
      }
      str += String(num);
      remainder = dividend;
      zeroes = 0;
    } else if (dividendArr.length) {
      if (!remainder && dividend) str += '0';
      dividend = Number(String(dividend) + dividendArr.pop());
      zeroes++;
    } else {
      str += '0'.repeat(zeroes);
      break;
    }
  }

  let ans = sign ? -Number(str) : Number(str);
  return ans > MAX ? MAX : ans < MIN ? MIN : ans;
};