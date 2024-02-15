const largestPerimeter = (nums) => {
  let max = -1;
  nums.sort((a, b) => a - b);
  for (let i = 1; i < nums.length; ++i) {
    if (i > 1 && nums[i - 1] > nums[i]) max = nums[i - 1] + nums[i];
    nums[i] += nums[i - 1];
  }
  return max;
};