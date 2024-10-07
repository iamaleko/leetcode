function pivotIndex(nums: number[]): number {
  let lsum = 0, rsum = nums.reduce((v, a) => v + a);
  for (let i = 0; i < nums.length; i++) {
    rsum -= nums[i];
    if (lsum === rsum) return i;
    lsum += nums[i];
  }
  return -1;
};