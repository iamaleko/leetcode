class Solution:
  def findTheLongestSubstring(self, s: str) -> int:
    v = { 'a': 0, 'e': 1, 'i': 2, 'o': 3, 'u': 4 }
    m = { 0: -1 }
    mask = 0
    ans = 0
    for i, ch in enumerate(s):
      if ch in v:
        mask ^= 1 << v[ch]
      if mask in m:
        if ans < i - m[mask]:
          ans = i - m[mask]
      else:
        m[mask] = i
    return ans

        