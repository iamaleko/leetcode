class Solution:
  def bubbleFromCenter(self, s: str, l: int, r: int) -> str:
    while l > -1 and r < len(s) and s[l] == s[r]:
      l -= 1
      r += 1
    return s[l + 1: r]

  def longestPalindrome(self, s: str) -> str:
    ans = ""
    for i in range(len(s)):
      a = self.bubbleFromCenter(s, i, i)
      if len(a) > len(ans): ans = a
      b = self.bubbleFromCenter(s, i, i + 1)
      if len(b) > len(ans): ans = b
    return ans   