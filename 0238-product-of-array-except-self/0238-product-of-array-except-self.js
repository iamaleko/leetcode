const productExceptSelf = (nums) => {
  const res = new Array(nums);
  res[nums.length - 1] = nums[nums.length - 1];

  for (let i = nums.length - 2; i >= 0; i--) res[i] = nums[i] * res[i + 1];

  let running = 1;
  for (let i = 0; i < nums.length - 1; running *= nums[i++]) res[i] = running * res[i + 1];
  res[nums.length - 1] = running;

  return res;
};