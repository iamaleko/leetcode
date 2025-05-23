function check(nums: number[]): boolean {
  nums.push(nums[0]);
  for (let i = 1, fold = false; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      if (fold) return false;
      fold = true;
    }
  }
  return true;
};