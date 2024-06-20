class Solution:
  def maxDistance(self, position: List[int], m: int) -> int:
    position.sort()
    
    def check(f):
      last = position[0] - f
      cnt = 0
      for pos in position:
        if pos - last >= f:
          last = pos
          cnt += 1
          if cnt >= m:
            return True
      return False

    l = 0
    r = position[-1] // (m - 1)
    while l <= r:
      c = l + ((r - l) >> 1)
      if check(c):
        l = c + 1
      else:
        r = c - 1

    return r
        