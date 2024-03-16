const findMaxLength = (nums) => {
  let map = [], level = 1e5, max = 0, i = 0;
  while (i < nums.length) {
    if ((nums[i] ? ++level : --level) === 1e5) {
      max = ++i;
    } else if (map[level] !== undefined) {
      max = Math.max(max, i++ - map[level]);
    } else {
      map[level] = i++;
    }
  }
  return max;
};