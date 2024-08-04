function rangeSum(nums: number[], n: number, left: number, right: number): number {
  const subarrays: number[] = [],
        mod = 1e9 + 7;
  for (let i = 0; i < n; i++) {
    subarrays.push(nums[i])
    for (let j = i + 1; j < n; j++) {
      subarrays.push(subarrays[subarrays.length - 1] + nums[j])
    }
  }
  subarrays.sort((a, b) => a - b);
  let ans = 0;
  for (let i = left - 1; i < right; i++) {
    ans = (ans + subarrays[i]) % mod;
  }
  return ans;
};