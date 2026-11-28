class Solution:
  def maxDigitRange(self, nums: list[int]) -> int:
    ans = 0
    rng = 0
    for num in nums:
      l = 9
      h = 0
      n = num
      while n:
        d = n % 10
        l = min(l, d)
        h = max(h, d)
        n = int(n / 10)
      if h - l > rng:
        rng = h - l
        ans = num
      elif h - l == rng:
        ans += num
    return ans
        