class Solution:
  def maxDistance(self, st: str, k: int) -> int:
    y,x,n,s,w,e = 0,0,0,0,0,0
    m = 0
    for ch in st:
      if ch == 'N':
        y -= 1
        n += 1
      elif ch == 'S':
        y += 1
        s += 1
      elif ch == 'W':
        x -= 1
        w += 1
      elif ch == 'E':
        x += 1
        e += 1
      m = max(abs(y) + abs(x) + min(min(n,s) * 2 + min(e,w) * 2, k * 2), m)
    return m