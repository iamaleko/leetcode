function minBitFlips(start: number, goal: number): number {
  let ans = 0;
  start ^= goal;
  while (start) {
    ans += start & 1;
    start >>= 1;
  }
  return ans;
};