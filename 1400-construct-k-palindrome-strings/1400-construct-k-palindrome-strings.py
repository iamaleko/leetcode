class Solution:
  def canConstruct(self, s: str, k: int) -> bool:
    if len(s) < k:
      return False
    odd = 0
    for v in Counter(s).values():
      if v % 2 == 1:
        odd += 1
    return odd <= k
        