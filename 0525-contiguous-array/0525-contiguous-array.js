const findMaxLength = (nums) => {
  let level = 0, max = 0;
  for (let i = 0; i < nums.length; i++) {
    nums[i] ? level++ : level--;
    nums[i] = 0;
    if (level === 0) {
      max = i + 1;
    } else if (level < 0) {
      if (nums[-level-1] & 4294901760) {
        if (max < (i + 1) - ((nums[-level-1] & 4294901760) >>> 16)) max = (i + 1) - ((nums[-level-1] & 4294901760) >>> 16);
      } else {
        nums[-level-1] |= (i + 1) << 16;
      }
    } else if (level > 0) {
      if (nums[level-1] & 65535) {
        if (max < (i + 1) - (nums[level-1] & 65535)) max = (i + 1) - (nums[level-1] & 65535);
      } else {
        nums[level-1] |= (i + 1);
      }
    }
  }
  return max;
};