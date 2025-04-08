class Solution:
  def minimumOperations(self, nums: List[int]) -> int:
    count = Counter(nums)
    ans = 0
    for i in range(0, len(nums), 3):
      if len(count) == len(nums) - i:
        break
      ans += 1
      for j in range(i, min(len(nums), i + 3)):
        count[nums[j]] -= 1
        if not count[nums[j]]: del count[nums[j]]
    return ans
        