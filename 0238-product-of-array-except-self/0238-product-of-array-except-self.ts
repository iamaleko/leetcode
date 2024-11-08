function productExceptSelf(nums: number[]): number[] {
  const ltr = new Array(nums.length).fill(0),
        rtl = new Array(nums.length).fill(0),
        ans = new Array(nums.length).fill(0);
  for (let product = 1, i = 0; i < nums.length; i++) ltr[i] = product *= nums[i];
  for (let product = 1, i = nums.length - 1; i >= 0; i--) rtl[i] = product *= nums[i];
  for (let i = 0; i < nums.length; i++) {
    ans[i] = (i ? ltr[i - 1] : 1) * (i + 1 < nums.length ? rtl[i + 1] : 1);
  }
  return ans;
};