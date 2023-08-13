const containsNearbyDuplicate = (nums, k) => {
  const m = {};
  for (const i in nums) {
    if (i - m[nums[i]] <= k) return true;
    m[nums[i]] = i;
  }
  return false;
};