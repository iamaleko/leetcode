function subarraySum(nums: number[], k: number): number {
  const m = new Map<number, number>();
  let sum = 0, ans = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    m.set(sum, (m.get(sum) ?? 0) + 1);
    sum += nums[i];
  }
  m.set(sum, (m.get(sum) ?? 0) + 1);
  for (const num of nums) {
    m.set(sum, m.get(sum) - 1);
    ans += m.get(sum - k) ?? 0;
    sum -= num;
  }
  return ans;
};