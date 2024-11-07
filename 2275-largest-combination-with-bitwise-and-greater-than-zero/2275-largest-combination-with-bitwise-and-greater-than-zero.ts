function largestCombination(nums: number[]): number {
  const bits = new Array(24).fill(0);
  for (let num of nums) {
    let i = 0;
    while (num) {
      if (num & 1) bits[i]++;
      num >>= 1;
      i++;
    }
  }
  return Math.max(...bits);
};