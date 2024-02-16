const findLeastNumOfUniqueInts = (nums, k) => {
  const map = new Map();
  let i = 0;
  while (i < nums.length) map.set(nums[i], (map.get(nums[i++]) || 0) + 1);
  nums = Array.from(map.values()).sort((a, b) => a - b);
  i = 0;
  while (nums[i] <= k) k -= nums[i++];
  return nums.length - i;
};