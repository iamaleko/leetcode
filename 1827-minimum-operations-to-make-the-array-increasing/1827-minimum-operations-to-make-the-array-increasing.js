const minOperations = (nums) => {
  let sum = 0;
  for (let i = 1; i < nums.length; ++i) if (nums[i] <= nums[i-1]) sum += -nums[i] + (nums[i] = nums[i-1] + 1);
  return sum;
};