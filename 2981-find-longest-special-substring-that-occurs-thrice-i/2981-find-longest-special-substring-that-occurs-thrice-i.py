class Solution:
  def maximumLength(self, s: str) -> int:
    cnt, ans, arr = 1, -1, [0] * 1626
    arr[(1 << 5) + ord(s[0]) - 96] = 1
    for i in range(1, len(s)):
      cnt = cnt + 1 if s[i] == s[i - 1] else 1
      for j in [cnt - x for x in range(min(cnt, 3))]:
        arr[(j << 5) + ord(s[i]) - 96] += 1
    for i in range(1626):
      if arr[i] > 2 and i >> 5 > ans:
        ans = i >> 5
    return ans

# class Solution:
#   def maximumLength(self, s: str) -> int:
#     cnt, ans, arr = 1, -1, [0] * 1626
#     arr[(1 << 5) + ord(s[0]) - 96] = 1
#     for i in range(1, len(s)):
#       cnt = cnt + 1 if s[i] == s[i - 1] else 1
#       for j in [cnt - x for x in range(min(cnt, 3))]:
#         if arr[key := (j << 5) + ord(s[i]) - 96] == 2:
#           if ans < j: ans = j
#         else:
#           arr[key] += 1
#     return ans
        