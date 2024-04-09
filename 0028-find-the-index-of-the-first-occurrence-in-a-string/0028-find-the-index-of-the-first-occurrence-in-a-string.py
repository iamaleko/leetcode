# class Solution:
#   def strStr(self, haystack: str, needle: str) -> int:
#     return haystack.find(needle)

class Solution:
  def strStr(self, haystack: str, needle: str) -> int:
    p = 0
    l = len(needle)
    for p in range(len(haystack) - l + 1):
      if haystack[p:p + l] == needle:
        return p
    return -1