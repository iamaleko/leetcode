function countBits(n: number): number[] {
  const ans: number[] = [0];
  let bits = 0, num = 0;
  while (ans.length <= n) {
    if (num & 1) {
      let bit = 1;
      while (num & bit) {
        num ^= bit;
        bit <<= 1;
        bits--;
      }
      num ^= bit;
    } else {
      num |= 1;
    }
    bits++;
    ans.push(bits);
  }
  return ans;
};