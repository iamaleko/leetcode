class Solution:
  def isMiddleElementUnique(self, nums: list[int]) -> bool:
    i = len(nums) >> 1
    return nums.index(nums[i]) == i and nums[::-1].index(nums[i]) == i
        