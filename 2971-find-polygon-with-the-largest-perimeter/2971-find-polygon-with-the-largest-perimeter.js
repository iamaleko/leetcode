const largestPerimeter = (nums) => {
  nums.sort((a, b) => b - a);
  let max = -1, i = nums.length - 2, sum = nums.at(-1) + nums.at(-2);
  while (i) sum > nums[--i] ? max = sum += nums[i] : sum += nums[i];
  return max;
};