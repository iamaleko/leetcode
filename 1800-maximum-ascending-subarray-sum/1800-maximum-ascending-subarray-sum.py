class Solution:
  def maxAscendingSum(self, nums: List[int]) -> int:
    ans = s = nums[0]
    for i in range(1, len(nums)):
      if nums[i-1] >= nums[i]:
        ans, s = max(ans, s), 0
      s += nums[i]
    return max(ans, s)
        