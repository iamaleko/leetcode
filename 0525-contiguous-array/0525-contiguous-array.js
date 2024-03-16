const findMaxLength = (nums) => {
  let map = {'0': -1}, level = 0, max = 0;
  for (let i = 0; i < nums.length; i++) {
    nums[i] ? level++ : level--;
    if (map.hasOwnProperty(level)) {
      if (max <  i - map[level]) max = i - map[level];
    } else {
      map[level] = i;
    }
  }
  return max;
};