class Solution:
  def minimumLength(self, s: str) -> int:
    ans = len(s)
    for n in Counter(s).values():
      if n > 2:
        ans -= n - 1 if n & 1 else n - 2
    return ans