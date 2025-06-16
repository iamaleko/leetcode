class Solution:
  def maximumDifference(self, nums: List[int]) -> int:
    ans = -1
    for i in range(1, len(nums)):
      if nums[i] > nums[0]:
        ans = max(ans, nums[i] - nums[0])
      nums[0] = min(nums[0], nums[i]) 
    return ans
        