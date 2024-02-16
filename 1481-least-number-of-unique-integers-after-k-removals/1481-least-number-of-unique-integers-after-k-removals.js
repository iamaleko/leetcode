const findLeastNumOfUniqueInts = (nums, k) => {
  const map = new Map();
  for (const num of nums) map.set(num, (map.get(num) || 0) + 1);
  nums = Array.from(map.entries()).map((e) => e[1]).sort((a, b) => a - b);
  let i = 0;
  while (nums[i] <= k) k -= nums[i++];
  return nums.length - i;
};