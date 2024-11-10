function minimumSubarrayLength(nums: number[], k: number): number {
  let ans = -1, target = 0;
  const mask: number[] = new Array(32).fill(0),
        update = (num: number, add: boolean) => {
          let i = 0;
          while (num) {
            if (num & 1) (mask[i] += add ? 1 : -1) ? (target |= 1 << i) : (target &= ~(1 << i));
            i++;
            num >>= 1;
          }
        };
  for (let l = 0, r = 0; r < nums.length; r++) {
    update(nums[r], true);
    while (target >= k && l <= r) {
      if (ans === -1 || ans > r - l + 1) ans = r - l + 1;
      update(nums[l++], false);
    }
  }
  return ans;
};