const maxProduct = (nums) => {
  let a = 0, b = 0, i = 0;
  for (;i<nums.length;++i) {
    if (nums[i] > a) {
      b = a;
      a = nums[i];
    } else if (nums[i] > b) {
      b = nums[i];
    }
  }
  return (a - 1) * (b - 1);
};