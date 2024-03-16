const findMaxLength = (nums) => {
  const map = new Map();
  map.set(0, -1);
  let level = 0, max = 0, i = 0;
  while (i < nums.length) {
    if (map.has(nums[i] ? ++level : --level)) {
      nums[0] = Math.max(nums[0], i++ - map.get(level));
    } else {
      map.set(level, i++);
    }
  }
  return nums[0];
};