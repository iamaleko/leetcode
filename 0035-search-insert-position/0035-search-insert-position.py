class Solution:
  def searchInsert(self, nums: List[int], target: int) -> int:
    l = 0
    r = len(nums) - 1
    while l <= r:
      c = (l + r) // 2
      if nums[c] < target:
        l = c + 1
      else:
        r = c - 1
    return l