const longestOnes = (nums, k) => {
  let zeroes = 0, l = 0, r = 0, max = 0;
  while (l < nums.length && r < nums.length) {
    if (nums[r] === 0) {
      if (zeroes < k) {
        zeroes++;
        r++;
      } else {
        if (nums[l] === 0) zeroes--;
        l++;
      }
    } else {
      r++;
    }
    if (max < r - l) max = r - l;
  }
  return max;
};