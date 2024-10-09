function hammingWeight(n: number): number {
  let bits = 0;
  while (n) n &= n - 1, bits++;
  return bits;
};