function longestMonotonicSubarray(nums: number[]): number {
  let inc = 1, dec = 1, ans = 1;
  for (let i = 0; i < nums.length; i++) {
    inc = nums[i] > nums[i-1] ? inc + 1 : 1;
    dec = nums[i] < nums[i-1] ? dec + 1 : 1;
    if (inc > ans) ans = inc;
    if (dec > ans) ans = dec;
  }
  return ans;
};