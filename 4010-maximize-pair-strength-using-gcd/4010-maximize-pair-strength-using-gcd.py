from math import gcd

class Solution:
  def maxPairStrength(self, nums: list[int]) -> int:
    ans = 0
    for i in range(len(nums) - 1):
      for j in range(i + 1, len(nums)):
        ans = max(ans, (nums[i] * nums[j]) / math.pow(math.gcd(nums[i], nums[j]), 2))
    return int(ans)

        