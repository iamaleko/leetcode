const reductionOperations = (nums) => {
  // if all elements already the same
  if (new Set(nums).size === 1) return 0;
  
  // if elements differ
  nums.sort((a,b) => b - a);
  let ops = 0;
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] !== nums[i - 1]) {
      ops += i;
    }
  }
  return ops;
};