class Solution:
  def minimumOperations(self, nums: List[int]) -> int:
    m, i = {}, -1
    for j, num in enumerate(nums):
      if num in m:
        if m[num] > i:
          i = m[num]
      m[num] = j
    return math.ceil((i + 1) / 3) if i >= 0 else 0

# class Solution:
#   def minimumOperations(self, nums: List[int]) -> int:
#     count = Counter(nums)
#     ans = 0
#     for i in range(0, len(nums), 3):
#       if len(count) == len(nums) - i:
#         break
#       ans += 1
#       for j in range(i, min(len(nums), i + 3)):
#         count[nums[j]] -= 1
#         if not count[nums[j]]: del count[nums[j]]
#     return ans
        