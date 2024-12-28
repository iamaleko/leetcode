class Solution:
  def sum(self, l, r) -> int:
    return self.nums[r] - (self.nums[l - 1] if l else 0)

  def maxSumOfThreeSubarrays(self, nums: List[int], k: int) -> List[int]:
    # running sum
    self.nums = nums
    for i in range(1, len(nums)):
      self.nums[i] += self.nums[i - 1]
    # dp
    dp = [[(0,0),(0,0,0),(0,0,0,0)] for _ in nums]
    for r in range(k - 1, len(nums)):
      one = self.sum(l := r - k + 1, r)
      dp[r][0] = (one, l) if not r or dp[r-1][0][0] < one else dp[r-1][0]
      if l > k - 1:
        two = dp[l-1][0][0] + one
        dp[r][1] = (two, dp[l-1][0][1], l) if dp[r-1][1][0] < two else dp[r-1][1]
        thr = dp[l-1][1][0] + one
        dp[r][2] = (thr, dp[l-1][1][1], dp[l-1][1][2], l) if dp[r-1][2][0] < thr else dp[r-1][2]

    return dp[-1][2][1:]