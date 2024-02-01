const divideArray = (nums, k) => {
  nums.sort((a,b) => a - b);
  const res = [];
  for (let i = 0; i < nums.length;) {
    if (nums[i+2] - nums[i] > k) return [];
    res.push([nums[i++], nums[i++], nums[i++]]);
  }
  return res;
};
