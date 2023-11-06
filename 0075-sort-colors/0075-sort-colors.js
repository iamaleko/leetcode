const sortColors = (nums) => {
  let pos = 0;
  while (pos < nums.length) {
    if (nums[pos] > nums[pos + 1]) {
      [nums[pos], nums[pos + 1]] = [nums[pos + 1], nums[pos]]
      pos = 0;
    } else {
      ++pos;
    }
  }
  return nums;
};