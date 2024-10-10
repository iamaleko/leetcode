function fib(n: number): number {
  let a = 0, b = 1;
  if (n === 0) return a;
  while(--n) [a,b] = [b,a+b];
  return b;
};