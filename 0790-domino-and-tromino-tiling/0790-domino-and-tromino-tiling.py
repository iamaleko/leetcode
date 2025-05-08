class Solution:
  def numTilings(self, n: int) -> int:
    mod = 1e9 + 7
    dp = [1,1,2,5]
    for i in range(4, n + 1):
      dp.append((2 * dp[i - 1] + dp[i - 3]) % mod)
    return int(dp[n])
        