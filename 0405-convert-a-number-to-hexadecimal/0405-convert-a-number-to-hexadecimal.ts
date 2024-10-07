function toHex(num: number): string {
  if (num === 0) return '0';
  if (num < 0) num = 2**32 - (-num);
  let ans = '';
  const dict = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
  while (num) {
    ans = dict[num % 16] + ans;
    num = Math.floor(num / 16);
  }
  return ans;
};