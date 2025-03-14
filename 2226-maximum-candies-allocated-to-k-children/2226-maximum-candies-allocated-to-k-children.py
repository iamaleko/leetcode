class Solution:
  def check(self, c, candies, k):
    for pile in candies:
      if pile < c:
        return False
      k -= pile // c
      if k <= 0:
        return True
    return False
    
  def maximumCandies(self, candies: List[int], k: int) -> int:
    ans = 0
    if sum(candies) >= k:
      l, r = 1, sum(candies)//k
      candies.sort(reverse=True)
      while l <= r:
        c = l + r >> 1
        if self.check(c, candies, k):
          ans = c
          l = c + 1
        else:
          r = c - 1
    return ans