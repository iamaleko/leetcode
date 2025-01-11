class Solution:
  def canConstruct(self, s: str, k: int) -> bool:
    if len(s) >= k:
      odd = 0
      for v in Counter(s).values():
        if v & 1: odd += 1
        if odd > k: break
      else:
        return True
    return False
        