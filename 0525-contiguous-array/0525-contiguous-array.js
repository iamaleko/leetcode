const findMaxLength = (nums) => {
  let level = 0, max = -1, i = 0, a = [], b = [];
  while (i < nums.length) {
    if ((nums[i] ? ++level : --level) === 0) {
      max = i++;
    } else if (level < 0) {
      if (a[-level] !== undefined) {
        if (max < i - a[-level]) max = i - a[-level];
        i++;
      } else {
        a[-level] = ++i;
      }
    } else if (level > 0) {
      if (b[level] !== undefined) {
        if (max < i - b[level]) max = i - b[level];
        i++;
      } else {
        b[level] = ++i;
      }
    }
  }
  return max + 1;
};