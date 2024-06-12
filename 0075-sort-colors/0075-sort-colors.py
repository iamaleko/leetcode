# Count sort
# class Solution:
#   def sortColors(self, nums: List[int]) -> None:
#     d = { 0: 0, 1: 0, 2: 0 }
#     for num in nums:
#       d[num] += 1
#     p = 0
#     for num in d:
#       for i in range(d[num]):
#         nums[p] = num
#         p += 1   

# DNF
class Solution:
  def sortColors(self, nums: List[int]) -> None:
    lo = 0
    mid = 0
    hi = len(nums) - 1
    while mid <= hi:
      if nums[mid] == 1:
        mid += 1
      elif nums[mid] == 0:
        nums[lo], nums[mid] = nums[mid], nums[lo]
        mid += 1
        lo += 1
      elif nums[mid] == 2:
        nums[hi], nums[mid] = nums[mid], nums[hi]
        hi -= 1

    