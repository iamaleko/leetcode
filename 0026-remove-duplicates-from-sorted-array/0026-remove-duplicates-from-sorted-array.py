class Solution:
  def removeDuplicates(self, nums: List[int]) -> int:
    p = 0
    for num in nums:
      if num != nums[p]:
        p += 1
      nums[p] = num
    return p + 1
        