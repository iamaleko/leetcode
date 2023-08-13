const searchRange = (nums, target) => {
    if (!nums.length || nums[0] > target) return [-1, -1];
    let c1, c2, l1 = 0, l2 = 0, r1 = nums.length - 1, r2 = nums.length - 1;
    while (l1 < r1 || l2 < r2) {
      if (l1 < r1) {
        c1 = (l1 + r1) / 2 | 0;
        if (nums[c1] < target) { l1 = c1 + 1 } else { r1 = c1 - 1 }
      }
      if (l2 < r2) {
        c2 = (l2 + r2) / 2 | 0;
        if (nums[c2] > target) { r2 = c2 - 1 } else { l2 = c2 + 1 }
      }
    }
    if (nums[l1] !== target) ++l1;
    if (nums[l2] !== target) --l2;
    return nums[l1] !== target ? [-1, -1] : [l1, l2];
};