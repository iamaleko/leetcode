class Solution:
  def minDays(self, bloomDay: List[int], m: int, k: int) -> int:
    if k * m > len(bloomDay):
      return -1

    def check(d):
      adj = 0
      cnt = 0
      for num in bloomDay:
        adj = adj + 1 if num <= d else 0
        if adj >= k:
          adj -= k
          cnt += 1
      return cnt
    
    l = 0
    r = max(bloomDay)
    while l <= r:
      c = l + ((r - l) // 2)
      if check(c) >= m:
        r = c - 1
      else:
        l = c + 1

    return l
