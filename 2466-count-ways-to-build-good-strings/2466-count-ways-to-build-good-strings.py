class Solution:
  def countGoodStrings(self, low: int, high: int, zero: int, one: int) -> int:
    mod, ans, dp = int(1e9 + 7), 0, [1] + [0] * (high)
    for i in range(1, high + 1):
      dp[i] = ((0 if i < zero else dp[i - zero]) + (0 if i < one else dp[i - one])) % mod
      if low <= i <= high: ans = (ans + dp[i]) % mod
    return ans
