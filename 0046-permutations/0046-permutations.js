const permute = (nums) => {
  if (nums.length === 1) return [[nums[0]]];
  if (nums.length === 2) return [[nums[0], nums[1]], [nums[1], nums[0]]];

  const res = [];
  for (const i in nums) {
    const arr = nums.slice();
    const val = arr.splice(i, 1);
    const permutes = permute(arr);
    for (const arr of permutes) {
      arr.push(val);
      res.push(arr);
    }
  }

  return res;
};