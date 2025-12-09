/**
 * @param {number[]} nums
 * @return {number}
 */
var specialTriplets = function(nums) {
  mj = new Map();
  mk = new Map();
  const MOD = 10 ** 9 + 7;
  let ans = 0;
  for (
    let i = nums.length - 1, num = nums[i];
    i >= 0;
    num = nums[--i]
  ) {
    if (!(num & 1) && mj.has(num / 2)) {
      ans = (ans + mj.get(num / 2)) % MOD;
    }
    if (mk.has(num * 2)) {
      mj.set(num, (mj.get(num) ?? 0) + mk.get(num * 2));
    }
    mk.set(num, (mk.get(num) ?? 0) + 1);
  }
  return ans;
};