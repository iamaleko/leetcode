class Solution:
  def numberOfSubstrings(self, s: str) -> int:
    ans, n, l, m = 0, len(s), 0, {"a": 0, "b": 0, "c": 0}
    for r, ch in enumerate(s):
      m[ch] += 1
      while m["a"] and m["b"] and m["c"]:
        ans += n - r
        m[s[l]] -= 1
        l += 1
    return ans

        