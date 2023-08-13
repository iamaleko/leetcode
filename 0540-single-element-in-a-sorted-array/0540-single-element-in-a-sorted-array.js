const singleNonDuplicate = (nums) => {
  let l = 0, r = nums.length - 1, c;
  while (l < r) {
    c = (l + r) / 2 | 0;
    const isAfter = c % 2 === 0 ? nums[c] === nums[c + 1] : nums[c] === nums[c - 1];
    if (isAfter) {
      l = c + 1;
    } else {
      r = c;
    }
  }

  return nums[l];
};