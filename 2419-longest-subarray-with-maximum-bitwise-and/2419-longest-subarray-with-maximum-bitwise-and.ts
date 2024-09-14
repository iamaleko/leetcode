function longestSubarray(nums: number[]): number {
  const max = Math.max(...nums);
  let ans = 0, contiguous = 0;
  for (const num of nums) {
    if (num === max) {
      if (++contiguous > ans) ans = contiguous;
    } else {
      contiguous = 0;
    }
  }
  return ans;
};