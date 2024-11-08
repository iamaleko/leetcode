function getMaximumXor(nums: number[], maximumBit: number): number[] {
  let xor = 0, mask = 2 ** maximumBit - 1;
  for (const num of nums) xor ^= num;
  const ans: number[] = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    ans.push(xor & mask ^ mask);
    xor ^= nums[i];
  }
  return ans;
};