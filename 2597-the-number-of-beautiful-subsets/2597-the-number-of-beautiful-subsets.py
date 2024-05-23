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

# class Solution:
#   def beautifulSubsets(self, nums, k):
#     nums.sort()
#     path = [0] * 1001
#     def backtrack(i):
#       ans = 0
#       for j in range(i + 1, len(nums)):
#         if path[nums[j] - k] == 0:
#           path[nums[j]] += 1
#           ans += 1 + backtrack(j)
#           path[nums[j]] -= 1
#       return ans
#     return backtrack(-1)

class Solution:
  def beautifulSubsets(self, nums, k):
    nums.sort()
    path = set()
    def backtrack(i):
      ans = 0
      for i in range(i + 1, len(nums)):
        if nums[i] - k not in path:
          if nums[i] in path:
            ans += 1 + backtrack(i)
          else:
            path.add(nums[i])
            ans += 1 + backtrack(i)
            path.remove(nums[i])
      return ans
    return backtrack(-1)