function getMaximumXor(nums: number[], maximumBit: number): number[] {
  const n = nums.length,
        ans: number[] = new Array(n).fill(0),
        mask = (1 << maximumBit) - 1;
  for (let xor = 0, i = 0; i < n; ans[n - ++i] = xor & mask ^ mask) xor ^= nums[i];
  return ans;
};

// function getMaximumXor(nums: number[], maximumBit: number): number[] {
//   const n = nums.length,
//         ans: number[] = new Array(n).fill(0),
//         mask = (1 << maximumBit) - 1;
//   let xor = 0;
//   for (let i = 0; i < n; i++) xor ^= nums[i];
//   for (let i = 0; i < n; xor ^= nums[n - ++i]) ans[i] = xor & mask ^ mask;
//   return ans;
// };