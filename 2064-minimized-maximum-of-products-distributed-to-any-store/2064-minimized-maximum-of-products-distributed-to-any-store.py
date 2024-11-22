import math

class Solution:
  def minimizedMaximum(self, n: int, q: List[int]) -> int:
    n -= len(q)
    h = [(-x, x, 1) for x in q]
    heapify(h)

    while n:
      avg, total, distributed = heappop(h)

      _distributed = n + distributed
      if h and math.ceil(total / _distributed) < -h[0][0]:
        _distributed = math.ceil(total / (-h[0][0] - 1))

      if _distributed == distributed:
        heappush(h, (avg, total, distributed))
        break

      heappush(h, (-math.ceil(total / _distributed), total, _distributed))
      n -= _distributed - distributed

    return -h[0][0]
        