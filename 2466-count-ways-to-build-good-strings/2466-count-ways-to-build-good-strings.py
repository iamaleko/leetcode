class Solution:
  def countGoodStrings(self, low: int, high: int, zero: int, one: int) -> int:
    ans, dp = 0, [1] + [0] * (high)
    for i in range(1, high + 1):
      dp[i] = (0 if i - zero < 0 else dp[i - zero]) + (0 if i - one < 0 else dp[i - one])
      if low <= i <= high: ans += dp[i]
    return ans % int(1e9 + 7)
