function findComplement(num: number): number {
  let pos = 0, res = 0;
  while (num) {
    res |= (num & 1 ^ 1) << pos++;
    num >>= 1;
  }
  return res;
};