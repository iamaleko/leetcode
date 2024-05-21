class Solution:
  def subsetXORSum(self, nums: List[int]) -> List[List[int]]:
    subs = [[]]
    for num in nums:
      for i in range(len(subs)):
        subs.append(subs[i][:] + [num])
    
    ans = 0
    for sub in subs:
      xor = 0
      for num in sub:
        xor ^= num
      ans += xor
    return ans

# class Solution:
#   def subsetXORSum(self, nums: List[int]) -> int:
#     def rec(acc, i):
#       if i == len(nums):
#         return acc
#       else:
#         return rec(acc ^ nums[i], i + 1) + rec(acc, i + 1)
#     return rec(0, 0)