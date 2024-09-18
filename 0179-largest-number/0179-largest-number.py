from functools import cmp_to_key

class Solution:
  def largestNumber(self, nums: List[int]) -> str:
    if not max(nums):
      return '0'
    nums = list(map(str, nums))
    nums.sort(key=cmp_to_key(lambda a, b: 1 if a + b < b + a else -1))
    print(nums)
    return ''.join(nums)