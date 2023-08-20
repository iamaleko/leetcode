const runningSum = (nums) => {
  let sum = 0;
  for (const i in nums) nums[i] = (sum += nums[i]);
  return nums;
};