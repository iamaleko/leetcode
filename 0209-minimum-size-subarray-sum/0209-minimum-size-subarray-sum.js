const minSubArrayLen = (target, nums) => {
  if (!nums.length) return 0;
  let l = 0, r = 0, sum = nums[l], min = Infinity;
  while (l < nums.length && r < nums.length) {
    if (sum < target) {
      sum += nums[++r];
    } else if (sum >= target) {
      if (r - l < min) min = r - l;
      sum -= nums[l++];
    }
  }
  if (sum >= target && r - l < min) min = r - l;
  return min === Infinity ? 0 : min + 1;
};