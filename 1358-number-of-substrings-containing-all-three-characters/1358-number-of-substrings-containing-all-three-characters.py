class Solution:
  def numberOfSubstrings(self, s: str) -> int:
    ans, l, m = 0, 0, [0, 0, 0]
    for r in range(n := len(s)):
      m[ord(s[r]) - 97] += 1
      while all(m):
        ans += n - r
        m[ord(s[l]) - 97] -= 1
        l += 1
    return ans
        