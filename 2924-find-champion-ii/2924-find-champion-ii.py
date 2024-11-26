class Solution:
  def findChampion(self, n: int, edges: List[List[int]]) -> int:
    candidates = set(list(range(n)))
    for _, b in edges:
      if b in candidates:
        candidates.remove(b)
    return next(iter(candidates)) if len(candidates) == 1 else -1

        