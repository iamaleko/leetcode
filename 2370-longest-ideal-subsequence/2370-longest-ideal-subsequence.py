# class Solution:
#   def longestIdealString(self, s: str, k: int) -> int:
#     last = {}
#     dp = [1 for i in range(len(s))]
#     for i in range(len(s) - 1, -1, -1):
#       for chr in last:
#         if abs(ord(s[i]) - ord(chr)) <= k and dp[last[chr]] + 1 > dp[i]:
#           dp[i] = dp[last[chr]] + 1
#       last[s[i]] = i
#     return max(dp)

class Solution:
  def longestIdealString(self, s: str, k: int) -> int:
    last = {}
    dp = [1 for i in range(len(s))]
    for i in range(len(s) - 1, -1, -1):
      a = s[i]
      for j in range(ord(a) - k, ord(a) + k + 1):
        b = chr(j)
        if b in last and dp[last[b]] + 1 > dp[i]:
          dp[i] = dp[last[b]] + 1
      last[a] = i
    print(dp)
    return max(dp)
        