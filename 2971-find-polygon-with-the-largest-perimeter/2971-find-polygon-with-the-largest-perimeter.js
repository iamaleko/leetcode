const largestPerimeter = (nums) => {
  nums.sort((a, b) => a - b);
  let max = -1, i = 1, sum = nums[1] + nums[0];
  while (i < nums.length) sum > nums[++i] ? max = sum += nums[i] : sum += nums[i];
  return max;
};