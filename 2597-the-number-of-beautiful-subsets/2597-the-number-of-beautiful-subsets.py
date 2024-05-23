# class Solution:
#   def beautifulSubsets(self, nums: List[int], k: int) -> int:
#     nums.sort()
#     subsets = []

#     for n in nums:
#       for i in range(len(subsets)):
#         if (n - k) not in subsets[i]:
#           subset = subsets[i].copy()
#           subset.add(n)
#           subsets.append(subset)
#       subsets.append(set([n]))

#     return len(subsets)

class Solution:
  def beautifulSubsets(self, nums, k):
    nums.sort()
    path = [0] * (1001 + k)
    n = len(nums)

    def backtrack(i):
      ans = 0
      for num in nums[i:]:
        i += 1
        if path[num] == 0:
          path[num + k] += 1
          ans += 1 + backtrack(i)
          path[num + k] -= 1
      return ans
    return backtrack(0)

# class Solution:
#   def beautifulSubsets(self, nums, k):
#     nums.sort()
#     path = set()
#     n = len(nums)
    
#     def backtrack(i):
#       ans = 0
#       for i in range(i, n):
#         if nums[i] - k not in path:
#           if nums[i] in path:
#             ans += 1 + backtrack(i + 1)
#           else:
#             path.add(nums[i])
#             ans += 1 + backtrack(i + 1)
#             path.remove(nums[i])
#       return ans
#     return backtrack(0)