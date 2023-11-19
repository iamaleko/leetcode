const reductionOperations = (nums) => {
  nums.sort((a,b) => b - a);
  
  let ops = 0,
      l = 0,
      r = nums.length - 1;
  
  if (nums[l] === nums[r]) return 0;
  
  if (nums.length < 10000) {
    for (let i = 1; i < nums.length; ++i) {
      if (nums[i] !== nums[i - 1]) {
        ops += i;
      }
    }
  } else {
    let c,
        t = nums[l];
    while (t !== nums[r]) {
      while (l < r) {
        c = (l + r) / 2 | 0;
        if (nums[c] === t) {
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