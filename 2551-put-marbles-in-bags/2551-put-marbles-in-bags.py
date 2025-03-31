class Solution:
  def putMarbles(self, w: List[int], k: int) -> int:
    return 0 if k == 1 else sum((w := sorted([a + b for a, b in zip(w[:-1], w[1:])]))[-k + 1:]) - sum(w[:k - 1])