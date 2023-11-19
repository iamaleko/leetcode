const reductionOperations = (nums) => {
  // if all elements already the same
  if (new Set(nums).size === 1) return 0;
  
  // if elements differ
  nums.sort((a,b) => b - a);
  
  const bin = (t, l, r) => {
    while (l < r) {
      const c = (l + r) / 2 | 0;
      if (nums[c] === t) {
        l = c + 1;
      } else {
        r = c;
      }
    }
    return l;
  }
  
  let ops = 0, l = 0, r = nums.length - 1;
  while (nums[l] !== nums[r]) {
    ops += l = bin(nums[l], l, r);
  }
  
  return ops;
};