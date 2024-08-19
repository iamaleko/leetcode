function minSteps(n: number): number {
  if (n === 1) return 0;
  // power of 2
  const power = Math.log2(n);
  if (power % 1 === 0) return power * 2;
  // prime factor
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return i + minSteps(n / i);
  }
  return n;
};