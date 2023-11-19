const reductionOperations = (nums) => {
  nums.sort((a,b) => b - a);
  
  let ops = 0, l = 0, r = nums.length - 1, a, b, c;
  
  if (nums[l] === nums[r]) return 0;
  
  while (nums[l] !== nums[r]) {
    a = nums[l];
    b = r;
    while (l < b) {
      c = (l + b) / 2 | 0;
      if (nums[c] === a) {
        l = c + 1;
      } else {
        b = c;
      }
    }
    ops += l;
  }
  
  return ops;
};