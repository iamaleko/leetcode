class Solution:
  def findDuplicate(self, nums: List[int]) -> int:
    s = nums[nums[0]]
    f = nums[nums[nums[0]]]
    while s != f:
      s = nums[s]
      f = nums[nums[f]]
    f = nums[0]
    while s != f:
      s = nums[s]
      f = nums[f]
    return s


# class Solution:
#   def findDuplicate(self, nums: List[int]) -> int:
#     for i in range(len(nums)):
#       num = nums[i]
#       while nums[num - 1] != num:
#         nums[i] = nums[num - 1]
#         nums[num - 1] = num
#         num = nums[i]
#       if nums[num - 1] == num and i + 1 != num:
#         return num