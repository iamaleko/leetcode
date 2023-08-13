const findMin = (nums) => {
  let c, l = 0, r = nums.length - 1;
  if (nums[0] > nums[r]) {
    while (l < r) {
      c = (l + r) / 2 | 0;
      if (nums[c] > nums[l]) {l = c} else {r = c}
    }
    return nums[l + 1];
  }
  return nums[0];
};