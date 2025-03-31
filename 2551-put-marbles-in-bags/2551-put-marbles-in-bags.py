class Solution:
  def putMarbles(self, weights: List[int], k: int) -> int:
    k -= 1
    if not k:
      return 0
    for i in range(len(weights) - 1):
      weights[i] += weights[i + 1]
    weights.pop()
    weights.sort()
    return sum(weights[-k:]) - sum(weights[:k])