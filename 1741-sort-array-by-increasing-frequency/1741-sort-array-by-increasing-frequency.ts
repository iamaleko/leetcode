function frequencySort(nums: number[]): number[] {
  const fr: Record<number, number> = {};
  for (const num of nums) {
    if (!(num in fr)) fr[num] = 0;
    fr[num]++;
  }
  nums.sort((a, b) => fr[a] === fr[b] ? b - a : fr[a] - fr[b])
  return nums;
};