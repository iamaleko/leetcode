class Solution:
  def countBinarySubstrings(self, s: str) -> int:
    ans, l, c = 0, 0, 0
    for r, ch in enumerate(s):
      if c != l and ch != s[c]:
        ans += min(c - l, r - c)
        l, c = c, r
      elif c == l and ch != s[l]:
        c = r
    return ans + min(c - l, len(s) - c)
        