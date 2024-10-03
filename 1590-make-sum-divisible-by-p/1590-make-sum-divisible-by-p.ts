function minSubarray(nums: number[], p: number): number {
  const remove = nums.reduce((v, a) => a + v) % p;
  if (remove === 0) return 0;
  const m = new Map<number, number>();
  m.set(0, -1);
  let ans = nums.length, rs = 0;
  for (let i = 0; i < nums.length; i++) {
    rs += nums[i];
    if (m.has((rs - remove) % p)) {
      const j = m.get((rs - remove) % p);
      if (ans > i - j) ans = i - j;
    }
    m.set(rs % p, i);
  }
  return ans === nums.length ? -1 : ans;
};