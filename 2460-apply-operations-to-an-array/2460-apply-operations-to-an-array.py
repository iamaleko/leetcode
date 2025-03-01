class Solution:
  def applyOperations(self, nums: List[int]) -> List[int]:
    for i in range(len(nums) - 1):
      if nums[i] == nums[i + 1]:
        nums[i] *= 2
        nums[i + 1] = 0
    offset = 0
    for i in range(len(nums)):
      if not nums[i]:
        offset+=1
      elif offset:
        nums[i - offset] = nums[i]
        nums[i] = 0
    return nums      