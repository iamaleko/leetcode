const subsetXORSum = (nums) => {
  const rec = (val, i) => i === nums.length ? val : rec(val ^ nums[i], i + 1) + rec(val, i + 1);
  return rec(0, 0);
};