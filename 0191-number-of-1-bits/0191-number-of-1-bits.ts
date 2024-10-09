function hammingWeight(n: number): number {
  let bits = 0;
  while (n) {
    if (n & 1) bits++;
    n >>>= 1;
  }
  return bits;
};