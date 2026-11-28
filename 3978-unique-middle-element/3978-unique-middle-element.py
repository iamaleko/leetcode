class Solution:
  def isMiddleElementUnique(self, nums: list[int]) -> bool:
    return nums.count(nums[int(len(nums) / 2)]) == 1
        