function reverse(x: number): number {
  const sign = x < 0 ? -1 : 1;
  let ans = 0;
  x = Math.abs(x);
  while (x) {
    ans = ans * 10 + x % 10;
    x = x / 10 | 0;
  }
  return ans <= 2 ** 31 ? ans * sign : 0;
};