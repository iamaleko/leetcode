function countFairPairs(nums: number[], lower: number, upper: number): number {
  nums.sort((a, b) => a - b);
  let l = 0, r = nums.length - 1, ans = 0;
  while (l < r) {
    if (nums[l] + nums[r] < lower) {
      l++;
    } else if (nums[l] + nums[r] > upper) {
      r--;
    } else {
      let ll = l, rr = r, c: number;
      while (ll <= rr) {
        c = ll + rr >>>1;
        if (nums[c] + nums[r] <= upper) {
          ll = c + 1;
        } else {
          rr = c - 1;
        }
      }
      ans += ll - l;
      r--;
    }
  }
  return ans;
};