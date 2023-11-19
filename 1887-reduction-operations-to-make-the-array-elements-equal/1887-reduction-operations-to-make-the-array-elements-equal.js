const reductionOperations = (nums) => {
  nums.sort((a,b) => b - a);
  
  let ops = 0, l = 0, r = nums.length - 1, a, b, c;
  
  if (nums[l] === nums[r]) return 0;
  
  while (nums[l] !== nums[r]) {
    a = l;
    b = r;
    while (a < b) {
      c = (a + b) / 2 | 0;
      if (nums[c] === nums[l]) {
        a = c + 1;
      } else {
        b = c;
      }
    }
    ops += l = a;
  }
  
  return ops;
};