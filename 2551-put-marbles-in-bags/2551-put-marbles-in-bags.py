class Solution:
  def putMarbles(self, weights: List[int], k: int) -> int:
    mn, mx = [], []
    n = len(weights)
    for i in range(1, n):
      s = weights[i-1] + weights[i]
      mn.append((s, i))
      mx.append((-s, i))
    heapify(mn)
    heapify(mx)
    mns, mxs = [], []
    while len(mns) < k - 1:
      mns.append(heappop(mn)[1])
      mxs.append(heappop(mx)[1])
    a, b = weights[0] + weights[-1], weights[0] + weights[-1]
    for i, j in zip(sorted(mns), sorted(mxs)):
      a += weights[i - 1] + weights[i]
      b += weights[j - 1] + weights[j]
    return abs(a - b)

        