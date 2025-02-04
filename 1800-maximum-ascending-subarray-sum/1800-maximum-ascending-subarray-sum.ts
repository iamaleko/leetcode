function maxAscendingSum(nums: number[]): number {
  let ans = nums[0], sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i-1] >= nums[i]) {
      [ans, sum] = [Math.max(ans, sum), 0];
    }
    sum += nums[i];
  }
  return Math.max(ans, sum);
};