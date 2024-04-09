class Solution:
  def removeElement(self, nums: List[int], val: int) -> int:
    offset = 0
    for i in range(len(nums)):
      if nums[i] == val:
        offset += 1
      elif offset:
        nums[i - offset] = nums[i]
    return len(nums) - offset