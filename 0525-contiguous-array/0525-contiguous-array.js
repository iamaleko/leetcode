const findMaxLength = (nums) => {
  let map = new Map(), level = 0, max = 0, i = 0;
  while (i < nums.length) {
    if (nums[i] ? ++level : --level) {  
      if (map.has(level)) {
        max = Math.max(max, i++ - map.get(level));
      } else {
        map.set(level, i++);
      }
    } else {
      max = ++i;
    }
  }
  return max;
};