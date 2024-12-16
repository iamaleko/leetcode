class Solution:
  def countBinarySubstrings(self, s: str) -> int:
    ans, l, c, r = 0, 0, 0, 0
    while r < len(s):
      if c != l and s[r] != s[c]:
        ans += c - l if c - l < r - c else r - c
        l, c = c, r
      elif c == l and s[r] != s[l]:
        c = r
      r += 1
    return ans + (c - l if c - l < r - c else r - c)
        