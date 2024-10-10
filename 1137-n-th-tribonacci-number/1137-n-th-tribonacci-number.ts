function tribonacci(n: number): number {
  if (!n) return 0;
  if (n < 3) return 1;
  let a = 0, b = 1, c = 1;
  n -= 2;
  while (n--) [a,b,c] = [b,c,a+b+c];
  return c;
};