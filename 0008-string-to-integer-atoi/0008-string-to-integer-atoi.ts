function myAtoi(s: string): number {
  const MIN = -1 << 31,
        MAX = -MIN - 1,
        DIGITS = new Set(['0','1','2','3','4','5','6','7','8','9']);
  let res = '',
      sign = '';
  for (let char of s) {
    if (res === '' && sign === '' && char === ' ') {
      continue;
    } else if (res === '' && sign === '' && (char === '+' || char === '-')) {
      sign = char;
    } else if (DIGITS.has(char)) {
      res += char;
    } else {
      break
    }
  }
  return res ? Math.max(Math.min(Number(sign + res), MAX), MIN) : 0;
};