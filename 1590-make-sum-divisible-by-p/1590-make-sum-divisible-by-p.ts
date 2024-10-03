function minSubarray(nums: number[], p: number): number {
  const sum = nums.reduce((v, a) => a + v);
  if (sum % p === 0) return 0;
  const m = new Map<number, number>();
  m.set(0, -1);
  let ans = nums.length, rs = 0;
  for (let i = 0; i < nums.length; i++) {
    rs += nums[i];
    let remove = (rs - sum % p) % p;
    if (m.has(remove)) {
      const j = m.get(remove);
      if (ans > i - j) ans = i - j;
    }
    m.set(rs % p, i);
  }
  return ans === nums.length ? -1 : ans;
};