function search(nums: number[], target: number): number {
  let l = 0, r = nums.length - 1;
  // if array is rotated
  if (nums[0] > nums[r]) {
    // find rotation point
    while (l < r) {
      const c = l + r >>> 1;
      if (nums[c] > nums[l]) {
        l = c;
      } else {
        r = c;
      }
    }
    // select search side
    if (target < nums[0]) {
      l++;
      r = nums.length - 1;
    } else {
      r = l;
      l = 0;
    }
  }
  // perform target search
  if (target < nums[l] || target > nums[r]) return -1;
  while (l < r) {
    const c = l + r >>> 1;
    if (nums[c] < target) {
      l = c + 1;
    } else {
      r = c;
    }
  }
  return nums[l] === target ? l : -1;
};