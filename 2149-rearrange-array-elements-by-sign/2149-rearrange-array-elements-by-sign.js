const rearrangeArray = (nums) => {
  const res = [];
  let pi = 0, ni = 1;
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] < 0) {
      res[ni] = nums[i];
      ni += 2;
    } else {
      res[pi] = nums[i];
      pi += 2;
    }
  }
  return res;
};