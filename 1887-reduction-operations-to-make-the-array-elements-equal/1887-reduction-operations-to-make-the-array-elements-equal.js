const reductionOperations = (nums) => {
  nums.sort((a,b) => b - a);
  
  let ops = 0, l = 0, r = nums.length - 1;
  
  // edge case
  if (nums[l] === nums[r]) return 0;
  
  // search
  let c, t = nums[l];
  while (t !== nums[r]) {
    if (nums[l] > nums[l + 1]) {
      // edge case
      t = nums[++l];
      ops += l;
    } else {
      // binsearch
      while (l < r) {
        if (nums[c = l + r >>> 1] === t) {
          l = c + 1;
        } else {
          r = c;
        }
      }
      ops += l;
      t = nums[l];
      r = nums.length - 1;
    }
  } 
  
  return ops;
};
