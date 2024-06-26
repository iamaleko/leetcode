# class Solution:
#   def longestSubarray(self, nums: List[int]) -> int:
#     l = 0
#     z = 0
#     max = 0
#     for r in range(len(nums)):
#       if not nums[r]:
#         z += 1
#       while z > 1 and l < r:
#         if not nums[l]:
#           z -= 1
#         l += 1
#       if r - l > max:
#         max = r - l
#     return max

class Solution:
  def longestSubarray(self, nums: List[int]) -> int:
    l = 0
    z = 0
    n = len(nums)
    for r in range(n):
      if not nums[r]:
        z += 1
      if z > 1: # при таком подходе левый указатель за весь проход отстанет от правого на максимальную длинну на успешном участке
        if not nums[l]:
          z -= 1
        l += 1
    return n - l - 1