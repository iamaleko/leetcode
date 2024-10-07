function twoSum(nums: number[], target: number): number[] {
  const m = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    if (m.has(target - nums[i])) return [m.get(target - nums[i]), i];
    m.set(nums[i], i);
  }
};