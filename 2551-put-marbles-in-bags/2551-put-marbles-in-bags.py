# class Solution:
#   def putMarbles(self, weights: List[int], k: int) -> int:
#     mn, mx = [], []
#     n = len(weights)
#     for i in range(1, n):
#       s = weights[i-1] + weights[i]
#       mn.append((s, i))
#       mx.append((-s, i))
#     heapify(mn)
#     heapify(mx)
#     mns, mxs = [], []
#     while len(mns) < k - 1:
#       mns.append(heappop(mn)[1])
#       mxs.append(heappop(mx)[1])
#     print(mns, mxs)
#     a, b = weights[0] + weights[-1], weights[0] + weights[-1]
#     for i, j in zip(sorted(mns), sorted(mxs)):
#       a += weights[i - 1] + weights[i]
#       b += weights[j - 1] + weights[j]


#     splits = []
#     for i in range(1, len(weights)):
#       splits.append(weights[i-1] + weights[i])
#     splits.sort()
#     print(splits, splits[:k-1], splits[-k+1:])
#     c, d = weights[0] + weights[-1] + sum(splits[:k-1]), weights[0] + weights[-1] + sum(splits[-k+1:])
#     # return abs(c - d)
#     print(c,d,splits)
#     return abs(a - b)


# class Solution:
#   def putMarbles(self, weights: List[int], k: int) -> int:
#     splits = []
#     for i in range(1, len(weights)):
#       splits.append(weights[i-1] + weights[i])
#     splits.sort()
#     print(splits, splits[:k], splits[-k:])
    # a, b = weights[0] + weights[-1] + sum(splits[:k]), weights[0] + weights[-1] + sum(splits[-k:])
    # return abs(a - b)

class Solution:
  def putMarbles(self, weights: List[int], k: int) -> int:
    if k == 1:
      return 0
    for i in range(len(weights)-1):
      weights[i] += weights[i + 1]
    weights.pop()
    weights.sort()
    return sum(weights[-k + 1:]) - sum(weights[:k - 1])