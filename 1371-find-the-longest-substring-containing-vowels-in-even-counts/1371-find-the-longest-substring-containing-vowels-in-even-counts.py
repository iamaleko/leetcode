class Solution:
  def findTheLongestSubstring(self, s: str) -> int:
    v = { 'a': 1 << 0, 'e': 1 << 1, 'i': 1 << 2, 'o': 1 << 3, 'u': 1 << 4 }
    m = { 0: -1 }
    mask = 0
    ans = 0
    for i, ch in enumerate(s):
      if ch in v:
        mask ^= v[ch]
      if mask in m:
        if ans < i - m[mask]:
          ans = i - m[mask]
      else:
        m[mask] = i
    return ans

        