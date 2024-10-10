function majorityElement(nums: number[]): number {
  const freq: Record<number, number> = {};
  for (const num of nums) freq[num] = (freq[num] || 0) + 1;
  let ans = 0, max = 0;
  for (const num in freq) if (freq[num] > max) {
    ans = Number(num);
    max = freq[num];
  }
  return ans;
};