class Solution:
  def canBeIncreasing(self, nums: List[int]) -> bool:
    i = 0
    skip = 0
    last = 0
    while i < len(nums) - 1:
      if nums[i] < nums[i + 1] and last < nums[i]:
        last = nums[i]
      elif not skip and (i + 2 == len(nums) or nums[i] < nums[i + 2] and last < nums[i]):
        skip += 1
        last = nums[i]
        i += 1
      elif not skip and (i + 2 == len(nums) or nums[i + 1] < nums[i + 2] and last < nums[i + 1]):
        skip += 1
      else:
        return False
      i += 1

    return skip < 2

