function numberToWords(num: number): string {
  if (num === 0) return 'Zero';

  const dict = {
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
    10: 'Ten',
    11: 'Eleven',
    12: 'Twelve',
    13: 'Thirteen',
    14: 'Fourteen',
    15: 'Fifteen',
    16: 'Sixteen',
    17: 'Seventeen',
    18: 'Eighteen',
    19: 'Nineteen',
    20: 'Twenty',
    30: 'Thirty',
    40: 'Forty',
    50: 'Fifty',
    60: 'Sixty',
    70: 'Seventy',
    80: 'Eighty',
    90: 'Ninety',
    100: 'Hundred',
    1000: 'Thousand',
    1000000: 'Million',
    1000000000: 'Billion',
  };
  const ans: string[] = [];

  for (const factor of [1e9, 1e6, 1e3, 1e2]) {
    if (num >= factor) {
      const n = Math.floor(num / factor);
      num -= n * factor;
      ans.push(numberToWords(n));
      ans.push(dict[factor]);
    }
  }

  if (num >= 20) {
    const n = Math.floor(num / 10);
    num -= n * 10;
    ans.push(dict[n * 10]);
  }
  if (num > 0) {
    ans.push(dict[num]);
  }

  return ans.join(' ');
};