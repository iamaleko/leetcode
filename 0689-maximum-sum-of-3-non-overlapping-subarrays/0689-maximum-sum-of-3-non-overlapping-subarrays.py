class Solution:
  def maxSumOfThreeSubarrays(self, nums: List[int], k: int) -> List[int]:
    # running sum
    for i in range(1, len(nums)):
      nums[i] += nums[i - 1]
    # dp
    dp = [[(0,0),(0,0,0),(0,0,0,0)] for _ in nums]
    for r in range(k - 1, len(nums)):
      l = r - k + 1
      a = nums[r] - (nums[l - 1] if l else 0)
      dp[r][0] = (a, l) if not r or dp[r-1][0][0] < a else dp[r-1][0]
      if l > k - 1:
        b = dp[l-1][0][0] + a
        dp[r][1] = (b, dp[l-1][0][1], l) if dp[r-1][1][0] < b else dp[r-1][1]
        c = dp[l-1][1][0] + a
        dp[r][2] = (c, dp[l-1][1][1], dp[l-1][1][2], l) if dp[r-1][2][0] < c else dp[r-1][2]
    return dp[-1][2][1:]