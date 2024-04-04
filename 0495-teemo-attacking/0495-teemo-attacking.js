const findPoisonedDuration = (nums, dur) => {
  let sum = 0;
  for (let i = 1; i <= nums.length; i++) sum += nums[i] === undefined || nums[i] - nums[i - 1] > dur ? dur : nums[i] - nums[i - 1];
  return sum;
};