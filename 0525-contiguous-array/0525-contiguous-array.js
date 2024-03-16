const findMaxLength = (nums) => {
  let map = new Map(), level = 0, max = 0, i = 0;
  while (i < nums.length) {
    nums[i] ? ++level : --level;
    if (level === 0) {
      max = ++i;
    } else if (map.has(level)) {
      max = Math.max(max, i++ - map.get(level));
    } else {
      map.set(level, i++);
    }
  }
  return max;
};