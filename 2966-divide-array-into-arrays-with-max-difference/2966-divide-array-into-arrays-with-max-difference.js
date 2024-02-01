const divideArray = (nums, k) => {
  nums.sort((a,b) => a - b);
  const res = new Array(nums.length/3), l = nums.length;
  for (let i = 0; i < l; ) {
    if (nums[i + 2] - nums[i] > k) return [];
    res[i/3] = [nums[i++], nums[i++], nums[i++]];
  }
  return res;
};
