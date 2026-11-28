class Solution:
  def isMiddleElementUnique(self, nums: list[int]) -> bool:
    i = len(nums) >> 1
    return nums.index(nums[i]) == i == nums[::-1].index(nums[i])
        