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
      for j in range(i, n):
        if path[nums[j]] == 0:
          path[nums[j] + k] += 1
          ans += 1 + backtrack(j + 1)
          path[nums[j] + k] -= 1
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