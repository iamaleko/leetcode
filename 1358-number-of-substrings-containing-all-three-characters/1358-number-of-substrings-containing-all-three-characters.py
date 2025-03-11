class Solution:
  def numberOfSubstrings(self, s: str) -> int:
    ans, l, m = 0, 0, [0, 0, 0]
    i = [ord(x) - 97 for x in s]
    for r in range(n := len(s)):
      m[i[r]] += 1
      while all(m):
        ans += n - r
        m[i[l]] -= 1
        l += 1
    return ans
        