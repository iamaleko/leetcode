class Solution:
  def lengthOfLongestSubstring(self, s: str) -> int:
    ans, chars, l = -1, set(), 0
    for r, ch in enumerate(s):
      while ch in chars:
        chars.remove(s[l])
        l += 1
      chars.add(ch)
      if ans < r - l:
        ans = r - l
    return ans + 1