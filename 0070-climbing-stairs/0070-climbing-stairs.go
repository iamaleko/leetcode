func climbStairs(n int) int {
  dp := []int{1, 2}
  for i := range n {
    if i < 2 { continue }
    dp = append(dp, dp[len(dp)-1] + dp[len(dp)-2])
  }
  return dp[n - 1]
}