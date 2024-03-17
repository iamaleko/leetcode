const findMaxLength = (nums) => {
  let level = 0, max = -1, i = 0;
  while (i < nums.length) {
    nums[i] ? level++ : level--;
    nums[i] = 0;
    if (level === 0) {
      max = i++;
    } else if (level < 0) {
      if (nums[-level - 1] & 4294901760) {
        if (max < i - ((nums[-level - 1] & 4294901760) >>> 16)) max = i - ((nums[-level - 1] & 4294901760) >>> 16);
        i++;
      } else {
        nums[-level-1] |= ++i << 16;
      }
    } else if (level > 0) {
      if (nums[level - 1] & 65535) {
        if (max < i - (nums[level - 1] & 65535)) max = i - (nums[level - 1] & 65535);
        i++;
      } else {
        nums[level - 1] |= ++i;
      }
    }
  }
  return max + 1;
};