class Solution:
  def findTheLongestSubstring(self, s: str) -> int:
    v = { 'a': 1 << 0, 'e': 1 << 1, 'i': 1 << 2, 'o': 1 << 3, 'u': 1 << 4 }
    m = { 0: -1 }
    mask = 0
    ans = 0
    for i in range(len(s)):
      if s[i] in v:
        mask ^= v[s[i]]
      if mask in m:
        if ans < i - m[mask]:
          ans = i - m[mask]
      else:
        m[mask] = i
    return ans

        