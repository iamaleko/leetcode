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
    path = set()
    def backtrack(i):
      ans = 0
      for j in range(i + 1, len(nums)):
        if nums[j] - k not in path:
          if nums[j] in path:
            ans += 1 + backtrack(j)
          else:
            path.add(nums[j])
            ans += 1 + backtrack(j)
            path.remove(nums[j])
      return ans
    return backtrack(-1)