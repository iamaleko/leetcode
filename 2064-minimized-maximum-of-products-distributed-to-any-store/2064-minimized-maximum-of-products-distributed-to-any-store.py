import math

class Solution:
  def minimizedMaximum(self, n: int, q: List[int]) -> int:
    stores = len(q)
    h = [(-x, x, 1) for x in q]
    heapify(h)

    while stores < n:
      avg, total, distributed = heappop(h)
      _distributed = n - stores + distributed

      _avg = math.ceil(total / _distributed)
      if h and _avg < -h[0][0]:
        _avg = -h[0][0] - 1
      _distributed = math.ceil(total / _avg)
      _avg = math.ceil(total / _distributed)

      if _distributed == distributed:
        heappush(h, (avg, total, distributed))
        break

      heappush(h, (-_avg, total, _distributed))
      stores += _distributed - distributed

    return -h[0][0]
        