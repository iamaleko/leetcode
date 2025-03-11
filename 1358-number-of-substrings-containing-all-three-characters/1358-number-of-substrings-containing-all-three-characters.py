class Solution:
  def numberOfSubstrings(self, s: str) -> int:
    n, l, m = len(s), 0, {"a": 0, "b": 0, "c": 0}
    ans = 0
    for r in range(n):
      m[s[r]] += 1
      while m["a"] and m["b"] and m["c"]:
        ans += n - r
        m[s[l]] -= 1
        l += 1
    return ans

        