class Solution:
  def findTheLongestSubstring(self, s: str) -> int:
    v = { 'a': 1, 'e': 2, 'i': 4, 'o': 8, 'u': 16 }
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

        