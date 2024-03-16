const findMaxLength = (nums) => {
  const map = new Map();
  map.set(0, -1);
  let level = 0, max = 0, i = 0;
  for (; i < nums.length; i++) {
    nums[i] ? level++ : level--;
    if (map.has(level)) {
      max = Math.max(max, i - map.get(level));
      //if (max <  i - map.get(level)) max = i - map.get(level);
    } else {
      map.set(level, i);
    }
  }
  return max;
};