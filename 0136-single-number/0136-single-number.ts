function singleNumber(nums: number[]): number {
  let xor = nums[0];
  for (let i = 1; i < nums.length; i++) xor ^= nums[i];
  return xor;
};