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

# class Solution:
#   def longestIdealString(self, s: str, k: int) -> int:
#     last = {}
#     dp = [1 for i in range(len(s))]
#     for i in range(len(s) - 1, -1, -1):
#       for j in range(ord(s[i]) - k, ord(s[i]) + k + 1):
#         if chr(j) in last and dp[last[chr(j)]] + 1 > dp[i]:
#           dp[i] = dp[last[chr(j)]] + 1
#       last[s[i]] = i
#     return max(dp)

class Solution:
  def longestIdealString(self, s: str, k: int) -> int:
    last = [0 for _ in range(ord('z') + k + 1)]
    for i in range(len(s) - 1, -1, -1):
      longest = 0
      for j in range(ord(s[i]) - k, ord(s[i]) + k + 1):
        if last[j] > longest:
          longest = last[j]
      last[ord(s[i])] = longest + 1
    return max(last)