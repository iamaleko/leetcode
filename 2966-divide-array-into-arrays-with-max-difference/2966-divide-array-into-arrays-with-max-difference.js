const divideArray = (nums, k) => {
  nums.sort((a,b) => a - b);
  const res = [], l = nums.length;
  for (let i = 0; i < l;i+=3) {
    if (nums[i + 2] - nums[i] > k) return [];
    res.push([nums[i], nums[i+1], nums[i+2]]);
  }
  return res;
};
