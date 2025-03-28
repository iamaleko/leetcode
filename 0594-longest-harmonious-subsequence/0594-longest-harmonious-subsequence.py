class Solution:
  def findLHS(self, nums: List[int]) -> int:
    nums.sort()
    ans, l = -1, 0
    for r in range(len(nums)):
      while nums[r] - nums[l] > 1:
        l += 1
      if nums[r] - nums[l]:
        ans = max(ans, r - l)
    return ans + 1
        