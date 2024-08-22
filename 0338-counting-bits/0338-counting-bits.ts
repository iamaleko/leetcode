// Bottom-up dp
function countBits(n: number): number[] {
  const dp: number[] = [0];
  let bits = 0, num = 0;
  while (dp.length <= n) {
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
    dp.push(bits);
  }
  return dp;
};