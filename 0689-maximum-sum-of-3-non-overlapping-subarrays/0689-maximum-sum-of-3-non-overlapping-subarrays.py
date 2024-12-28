class Solution:
  def maxSumOfThreeSubarrays(self, nums: List[int], k: int) -> List[int]:
    # running sum
    for i in range(1, len(nums)):
      nums[i] += nums[i - 1]
    # dp
    dp = [[(0,0),(0,0,0),(0,0,0,0)] for _ in nums]
    for r in range(k - 1, len(nums)):
      l = r - k + 1
      a = nums[r] - nums[l - 1] if l else nums[r]
      if not r:
        dp[r][0] = (a, l)
      else:
        last = dp[r - 1]
        dp[r] = last[:]
        if last[0][0] < a: dp[r][0] = (a, l)
        if l > k - 1:
          prev = dp[l - 1]
          b = prev[0][0] + a
          if last[1][0] < b: dp[r][1] = (b, prev[0][1], l)
          c = prev[1][0] + a
          if last[2][0] < c: dp[r][2] = (c, prev[1][1], prev[1][2], l)
      
    return dp[-1][2][1:]