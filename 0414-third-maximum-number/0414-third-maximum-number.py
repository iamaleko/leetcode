class Solution:
  def thirdMax(self, nums: List[int]) -> int:
    a = -math.inf
    b = -math.inf
    c = -math.inf
    for num in nums:
      if num >= a:
        if num > a:
          a,b,c = num,a,b
      elif num >= b:
        if num > b:
          b,c = num,b
      elif num >= c:
          c = num
    return c if math.isfinite(c) else a
