function subarraySum(nums: number[], k: number): number {
  const m: Record<number, number> = {};
  let sum = 0, ans = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    m[sum] = (m.hasOwnProperty(sum) ? m[sum] : 0) + 1;
    sum += nums[i];
  }
  m[sum] = (m.hasOwnProperty(sum) ? m[sum] : 0) + 1;
  for (const num of nums) {
    m[sum]--;
    if (m.hasOwnProperty(sum - k)) ans += m[sum - k];
    sum -= num;
  }
  return ans;
};