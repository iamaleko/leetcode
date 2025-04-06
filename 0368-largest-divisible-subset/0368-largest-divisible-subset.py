class Solution:
  def largestDivisibleSubset(self, nums: List[int]) -> List[int]:
    nums.sort()
    divisors = {}
    ans = []
    for num in nums:
      path = divisors[num] if num in divisors else []
      for divisor in divisors:
        if num % divisor == 0 and len(path) < len(divisors[divisor]):
          path = divisors[divisor]
      divisors[num] = path + [num]
      if len(path) >= len(ans):
        ans = divisors[num]
    return ans
        