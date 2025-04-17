function countPairs(nums: number[], k: number): number {
  const map: Record<number, number[]> = {};
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in map) {
      for (const j of map[nums[i]]) {
        if (j * i % k === 0) ans++;
      }
      map[nums[i]].push(i);
    } else {
      map[nums[i]] = [i];
    }
  }
  return ans;
};