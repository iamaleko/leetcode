class Solution:
  def searchRange(self, nums: List[int], target: int) -> List[int]:
    if len(nums) == 0 or nums[0] > target:
      return [-1, -1]
    l1 = l2 = 0
    r1 = r2 = len(nums) - 1
    while l1 < r1 or l2 < r2:
      if l1 < r1:
        c1 = l1 + r1 >> 1
        if nums[c1] < target:
          l1 = c1 + 1
        else:
          r1 = c1 - 1
      if l2 < r2:
        c2 = l2 + r2 >> 1
        if nums[c2] > target:
          r2 = c2 - 1
        else:
          l2 = c2 + 1
    if nums[l1] != target:
      l1 += 1
    if nums[l2] != target:
      l2 -= 1
    return [-1, -1] if l1 == len(nums) or nums[l1] != target else [l1, l2]
        