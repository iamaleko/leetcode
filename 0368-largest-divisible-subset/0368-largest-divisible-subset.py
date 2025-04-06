class Solution:
  def largestDivisibleSubset(self, nums: List[int]) -> List[int]:
    nums.sort()
    divisors = {}
    ans = []
    for num in nums:
      path = divisors[num] if num in divisors else [num]
      for divisor, divisorPath in divisors.items():
        if num % divisor == 0 and len(path) <= len(divisorPath):
          path = divisorPath + [num]
      divisors[num] = path
      if len(path) > len(ans):
        ans = path
    return ans
        