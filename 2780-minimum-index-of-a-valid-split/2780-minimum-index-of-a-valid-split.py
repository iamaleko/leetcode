class Solution:
  def minimumIndex(self, nums: List[int]) -> int:
    # get dominant, Boyer-Moore
    x, c = 0, 0
    for num in nums:
      if not c:
        x = num
      c += 1 if x == num else -1
    # find split, running sum
    l, r, n = 0, nums.count(x), len(nums)
    for i, num in enumerate(nums):
      if l > i // 2 and r > (n - i) // 2:
        return i - 1
      if num == x:
        l += 1
        r -= 1
    return -1
        