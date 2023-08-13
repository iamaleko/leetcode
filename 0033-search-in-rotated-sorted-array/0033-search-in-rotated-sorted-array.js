const search = (nums, target) => {
  let c, l = 0, r = nums.length - 1;
  if (nums[0] > nums[r]) {
    while (l < r) {
      c = (l + r) / 2 | 0;
      if (nums[c] > nums[l]) {l = c} else {r = c}
    }
    if (target < nums[0]) {
      ++l;
      r = nums.length - 1;
    } else {
      r = l;
      l = 0;
    }
  }
  if (target < nums[l] || target > nums[r]) return -1;
  while (l < r) {
    c = (l + r) / 2 | 0;
    if (nums[c] < target) {l = c + 1} else {r = c}
  }
  return nums[l] === target ? l : -1;
};