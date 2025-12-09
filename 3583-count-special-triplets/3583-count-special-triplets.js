/**
 * @param {number[]} nums
 * @return {number}
 */
var specialTriplets = function(nums) {
  mj = {};
  mk = {};
  const MOD = 10 ** 9 + 7;
  let ans = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    const num = nums[i];
    if ((num / 2) in mj) {
      ans = (ans + mj[num / 2]) % MOD;
    }
    if ((num * 2) in mk) {
      mj[num] = ((mj[num] ?? 0) + mk[num * 2]) % MOD;
    }
    mk[num] = ((mk[num] ?? 0) + 1) % MOD;
  }
  return ans;
};