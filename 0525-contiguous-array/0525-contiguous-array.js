const findMaxLength = (nums) => {
  let map = new Array(1e5), level = 1e5, max = 0, i = 0;
  while (i < nums.length) {
    if ((nums[i] ? ++level : --level) === 1e5) {
      max = ++i;
    } else if (map[level - 1e5] !== undefined) {
      max = Math.max(max, i++ - map[level - 1e5]);
    } else {
      map[level - 1e5] = i++;
    }
  }
  return max;
};