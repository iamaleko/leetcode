const rearrangeArray = (nums) => {
  const res = [];
  for (let pi = -2, ni = -1, i = 0; i < nums.length; res[nums[i] < 0 ? ni += 2 : pi += 2] = nums[i++]);
  return res;
};