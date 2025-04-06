class Solution:
  def largestDivisibleSubset(self, nums: List[int]) -> List[int]:
    nums.sort()
    divisors = {}
    ans = []
    for num in nums:
      path = divisors[num] if num in divisors else [num]
      for divisor in divisors:
        if num % divisor == 0 and len(path) <= len(divisors[divisor]):
          path = divisors[divisor] + [num]
      divisors[num] = path
      if len(path) > len(ans):
        ans = path
    return ans
        