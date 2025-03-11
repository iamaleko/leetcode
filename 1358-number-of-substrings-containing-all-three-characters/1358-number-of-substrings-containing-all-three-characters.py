class Solution:
  def numberOfSubstrings(self, s: str) -> int:
    ans, n, l, m = 0, len(s), 0, [0,0,0]
    for r in range(n):
      m[ord(s[r]) - 97] += 1
      while all(m):
        ans += n - r
        m[ord(s[l]) - 97] -= 1
        l += 1
    return ans

        