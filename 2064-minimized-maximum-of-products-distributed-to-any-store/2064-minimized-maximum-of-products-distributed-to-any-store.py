import math

class Solution:
  def minimizedMaximum(self, n: int, q: List[int]) -> int:
    n -= len(q)
    h = [(-x, x, 1) for x in q]
    heapify(h)

    while n:
      (avg, total, distributed) = heappop(h)

      _distributed = n + distributed
      _avg = -math.ceil(total / _distributed)
      if h and _avg > h[0][0]:
        _distributed = math.ceil(total / (-h[0][0] - 1))
        _avg = -math.ceil(total / _distributed)

      heappush(h, (_avg, total, _distributed))
      n -= _distributed - distributed

    return -h[0][0]
        