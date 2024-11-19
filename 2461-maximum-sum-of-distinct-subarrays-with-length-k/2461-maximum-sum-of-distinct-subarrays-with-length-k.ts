function maximumSubarraySum(nums: number[], k: number): number {
  const counter = new Map<number, number>();
  let ans = 0;
  for (let sum = 0, l = 0, r = 0; r < nums.length; r++) {
    sum += nums[r];
    counter.set(nums[r], (counter.get(nums[r]) ?? 0) + 1);
    
    if (r - l + 1 > k) {
      sum -= nums[l];
      const count = counter.get(nums[l]) ?? 0;
      if (count === 1) {
        counter.delete(nums[l]);
      } else {
        counter.set(nums[l], count - 1);
      }
      l++;
    }

    if (counter.size === k && sum > ans) ans = sum;
  }
  return ans;
};