class Solution:
  def countBinarySubstrings(self, s: str) -> int:
    ans, l, c = 0, 0, 0
    for r in range(len(s)):
      if c != l and s[r] != s[c]:
        ans += c - l if c - l < r - c else r - c
        l, c = c, r
      elif c == l and s[r] != s[l]:
        c = r
    return ans + min(c - l, len(s) - c)
        