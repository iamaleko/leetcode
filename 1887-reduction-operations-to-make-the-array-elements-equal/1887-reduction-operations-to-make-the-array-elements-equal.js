const reductionOperations = (nums) => {
  nums.sort((a,b) => b - a);
  
  let ops = 0, l = 0, r = nums.length - 1;
  
  if (nums[l] === nums[r]) return 0;
  
  let c, t = nums[l];
  while (t !== nums[r]) {
    if (l < r && nums[l] > nums[l + 1]) {
      ++l;
    } else {
    while (l < r) {
      c = (l + r) / 2 | 0;
      if (nums[c] === t) {
        l = c + 1;
      } else {
        r = c;
      }
    }
    }
    ops += l;
    t = nums[l];
    r = nums.length - 1;
  } 
  
  return ops;
};