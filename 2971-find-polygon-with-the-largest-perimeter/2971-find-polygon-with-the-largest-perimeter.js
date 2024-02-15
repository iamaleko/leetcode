const largestPerimeter = (nums) => {
  nums.sort((a, b) => a - b);
  let max = -1, i = 2, sum = nums[1] + nums[0];
  for (; i < nums.length; ++i) sum > nums[i] ? max = sum += nums[i] : sum += nums[i];
  return max;
};