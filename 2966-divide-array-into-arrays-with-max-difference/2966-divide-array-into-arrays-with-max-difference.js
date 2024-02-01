const divideArray = (nums, k) => {
  nums.sort((a,b) => a - b);
  const res = [[]];
  for (let p = 0, i = 0; i < nums.length; ++i) {
    if (res[p].length === 3) {
      if (res[p][2] - res[p][0] > k) return [];
      res[++p] = [];
    }
    res[p].push(nums[i]);
  }
  return res.at(-1)[2] - res.at(-1)[0] > k ? [] : res;
};
