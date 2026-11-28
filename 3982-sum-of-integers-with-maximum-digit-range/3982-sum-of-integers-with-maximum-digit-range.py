class Solution:
  def maxDigitRange(self, nums: list[int]) -> int:
    ans, rng = 0, 0
    for num in nums:
      l, h, n = 9, 0, num
      while n:
        d = n % 10
        if d < l: l = d
        if d > h: h = d
        n //= 10
      if h - l > rng:
        rng = h - l
        ans = num
      elif h - l == rng:
        ans += num
    return ans
        