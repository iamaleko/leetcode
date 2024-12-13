class Solution:
  def findDuplicate(self, nums: List[int]) -> int:
    for i in range(len(nums)):
      num = nums[i]
      while nums[num - 1] != num:
        nums[i] = nums[num - 1]
        nums[num - 1] = num
        num = nums[i]
      if nums[num - 1] == num and i + 1 != num:
        return num
    return -1