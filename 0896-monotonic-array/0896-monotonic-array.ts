function isMonotonic(nums: number[]): boolean {
  let inc = true, dec = true;
  for (let i = 1; i < nums.length; i++) {
    if (inc && nums[i] < nums[i - 1]) inc = false;
    if (dec && nums[i] > nums[i - 1]) dec = false;
    if (!inc && !dec) return false;
  }
  return true;
};