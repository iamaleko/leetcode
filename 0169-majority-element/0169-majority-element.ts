function majorityElement(nums: number[]): number {
  let candidate = nums[0], count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== candidate) {
      if (count === 1) {
        candidate = nums[i];
      } else {
        count--;
      }
    } else {
      count++;
    }
  }
  return candidate;
};

// function majorityElement(nums: number[]): number {
//   const freq: Record<number, number> = {};
//   for (const num of nums) freq[num] = (freq[num] || 0) + 1;
//   let ans = 0, max = 0;
//   for (const num in freq) if (freq[num] > max) {
//     ans = Number(num);
//     max = freq[num];
//   }
//   return ans;
// };