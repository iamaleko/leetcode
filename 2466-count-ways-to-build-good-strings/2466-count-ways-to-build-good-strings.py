class Solution:
  def countGoodStrings(self, low: int, high: int, zero: int, one: int) -> int:
    dp = [0] * (high)
    ans = 0
    for i in range(high):
      if i - zero >= -1: dp[i] += 1 if i - zero == -1 else dp[i - zero]
      if i - one >= -1: dp[i] += 1 if i - one == -1 else dp[i - one]
      if low <= (i + 1) <= high: ans += dp[i] 
    return ans % int(1e9 + 7)
