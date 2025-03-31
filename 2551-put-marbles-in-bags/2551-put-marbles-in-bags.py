class Solution:
  def putMarbles(self, w: List[int], k: int) -> int:
    return 0 if k == 1 else sum((w := sorted([w[i] + w[i + 1] for i in range(len(w) - 1)]))[-k + 1:]) - sum(w[:k - 1])