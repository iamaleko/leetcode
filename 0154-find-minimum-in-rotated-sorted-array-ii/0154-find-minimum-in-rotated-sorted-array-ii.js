const findMin = (nums) => {
  let c, l = 0, r = nums.length - 1, m = nums[0];
  if (nums[0] >= nums[r]) {
    while (l < r) {
      c = (l + r) / 2 | 0;
      if (nums[c] > nums[r]) {l = c + 1} else
      if (nums[c] === nums[r]) {--r} else
      if (nums[c] === nums[l]) {++l} else
      if (nums[c] > nums[l]) {l = c + 1} else {r = c}
      if (nums[l] < m) m = nums[l];
    }
  }
  return m;
};