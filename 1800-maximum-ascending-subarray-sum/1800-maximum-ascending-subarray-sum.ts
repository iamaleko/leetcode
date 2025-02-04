function maxAscendingSum(nums: number[]): number {
  let ans = nums[0], sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i-1] >= nums[i]) {
      if (sum > ans) ans = sum;
      sum = 0;
    }
    sum += nums[i];
  }
  return sum > ans ? sum : ans;
};