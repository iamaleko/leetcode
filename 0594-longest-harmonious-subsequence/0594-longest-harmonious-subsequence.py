class Solution:
  def findLHS(self, nums: List[int]) -> int:
    nums.sort()
    ans, l = 0, 0
    for r, rv in enumerate(nums):
      while rv - nums[l] > 1:
        l += 1
      if rv - nums[l] == 1 and r - l + 1 > ans:
        ans = r - l + 1
    return ans
        