class Solution:
  def countGoodStrings(self, low: int, high: int, zero: int, one: int) -> int:
    dp = [0] * (high)
    for i in range(high):
      if i - zero >= -1: dp[i] += 1 if i - zero == -1 else dp[i - zero]
      if i - one >= -1: dp[i] += 1 if i - one == -1 else dp[i - one]
    return int(sum(dp[low - 1:high]) % (10 ** 9 + 7))
