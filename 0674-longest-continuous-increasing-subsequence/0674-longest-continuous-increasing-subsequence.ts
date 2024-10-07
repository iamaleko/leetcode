function findLengthOfLCIS(nums: number[]): number {
  let ans = 1, con = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      con++
      if (con > ans) ans = con;
    } else {
      con = 1;
    }
  }
  return ans;
};