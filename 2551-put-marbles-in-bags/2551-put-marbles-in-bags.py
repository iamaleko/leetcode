class Solution:
  def putMarbles(self, w: List[int], k: int) -> int:
    return sum((w := sorted(map(sum, zip(w[:-1], w[1:]))))[-k:]) - sum(w[:k]) if (k := k - 1) else 0