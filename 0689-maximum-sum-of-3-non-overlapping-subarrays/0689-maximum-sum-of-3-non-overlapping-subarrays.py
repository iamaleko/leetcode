class Solution:
  def maxSumOfThreeSubarrays(self, nums: List[int], k: int) -> List[int]:
    # running sum
    for i in range(1, len(nums)):
      nums[i] += nums[i - 1]
    # dp
    dp = [[(0,0),(0,0,0),(0,0,0,0)]] * len(nums)
    dp[k - 1][0] = (nums[k - 1], 0)
    for r in range(k, len(nums)):
      dp[r] = dp[r - 1][:]
      l = r - k + 1
      a = nums[r] - nums[l - 1] if l else nums[r]
      if dp[r][0][0] < a: dp[r][0] = (a, l)
      if l > k - 1:
        b = dp[l - 1][0][0] + a
        if dp[r][1][0] < b: dp[r][1] = (b, dp[l - 1][0][1], l)
        c = dp[l - 1][1][0] + a
        if dp[r][2][0] < c: dp[r][2] = (c, dp[l - 1][1][1], dp[l - 1][1][2], l)
      
    return dp[-1][2][1:]