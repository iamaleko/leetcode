# class Solution:
#   def maxVowels(self, s: str, k: int) -> int:
#     vovels = set(['a','e','i','o','u'])
#     cnt = 0
#     for i in range(min(k, len(s))):
#       if s[i] in vovels:
#         cnt += 1
#     p = 0
#     max = cnt
#     while p + k < len(s):
#       if s[p] in vovels:
#         cnt -= 1
#       if s[p + k] in vovels:
#         cnt += 1
#       if cnt > max:
#         max = cnt
#       p += 1
#     return max

class Solution:
  def maxVowels(self, s: str, k: int) -> int:
    vovels = 'aeiou'
    cnt = 0
    max = 0
    k = -k
    for chr in s:
      if k >= 0 and s[k] in vovels:
        cnt -= 1
      if chr in vovels:
        cnt += 1
        if cnt > max:
          max = cnt
      k += 1
    return max
