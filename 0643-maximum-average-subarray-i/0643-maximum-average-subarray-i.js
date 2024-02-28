const findMaxAverage = (nums, k) => {
  let max, sum = 0, i = 0;
  for (; i < k; i++) sum += nums[i];
  max = sum / k;
  for (; i < nums.length; i++) {
    sum += nums[i] - nums[i - k];
    if (sum / k > max) max = sum / k;
  }
  return max;
};