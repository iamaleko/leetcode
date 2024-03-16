const findMaxLength = (nums) => {
  let level = 0, max = 0;
  nums.unshift(0);
  for (let i = 1; i < nums.length; i++) {
    nums[i] ? level++ : level--;
    nums[i] = 0;

    if (level === 0) {
      max = i;
    } else if (level < 0) {
      if (nums[-level] & 4294901760) {
        max = Math.max(max, i - ((nums[-level] & 4294901760) >>> 16));
      } else {
        nums[-level] |= i << 16;
      }
    } else if (level > 0) {
      if (nums[level] & 65535) {
        max = Math.max(max, i - (nums[level] & 65535));
      } else {
        nums[level] |= i;
      }
    }
  }
  return max;
};
