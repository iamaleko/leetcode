class Solution:
  def maxSumOfThreeSubarrays(self, nums: List[int], k: int) -> List[int]:
    # running sum
    for i in range(1, len(nums)):
      nums[i] += nums[i - 1]
    # dp
    dp = [[(0,0),(0,0,0),(0,0,0,0)]] * len(nums)
    dp[k - 1][0] = (nums[k - 1], 0)
    for r in range(k, len(nums)):
      curr = dp[r] = dp[r - 1][:]
      l = r - k + 1
      a = nums[r] - nums[l - 1] if l else nums[r]
      if curr[0][0] < a: curr[0] = (a, l)
      if l > k - 1:
        prev = dp[l - 1]
        b = prev[0][0] + a
        if curr[1][0] < b: curr[1] = (b, prev[0][1], l)
        c = prev[1][0] + a
        if curr[2][0] < c: curr[2] = (c, prev[1][1], prev[1][2], l)
      
    return dp[-1][2][1:]