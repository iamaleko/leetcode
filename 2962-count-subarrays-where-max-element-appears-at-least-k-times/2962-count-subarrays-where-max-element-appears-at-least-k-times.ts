function countSubarrays(nums: number[], k: number): number {
  let max = Math.max(...nums),
    cnt = 0,
    res = 0,
    l = 0,
    r = 0;
  while (r <= nums.length) {
    if (cnt < k) {
      if (nums[r++] === max) cnt++;
    } else {
      res += nums.length - r + 1;
      if (nums[l++] === max) cnt--;
    }
  }
  return res;
};