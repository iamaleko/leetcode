const maxProductDifference = (nums) => {
  nums.sort((a,b) => a - b);
  return nums.at(-1) * nums.at(-2) - nums.at(0) * nums.at(1);
};