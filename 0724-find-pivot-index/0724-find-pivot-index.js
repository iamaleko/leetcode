const pivotIndex = (nums) => {
  let i = nums.length - 1, l = 0, r = 0;
  for (; i > 0; --i) r += nums[i];
  for (; i < nums.length; ++i) {
    if (l === r) return i;
    l += nums[i];
    r -= nums[i + 1];
  }
  return -1;
};