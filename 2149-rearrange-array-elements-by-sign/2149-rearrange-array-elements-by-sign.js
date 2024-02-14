const rearrangeArray = (nums) => {
  const res = new Array(nums.length);
  for (let pi = 0, ni = 1, i = 0; i < nums.length; ++i) {
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