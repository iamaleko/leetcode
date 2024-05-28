# Sliding window
# class Solution:
#   def equalSubstring(self, s: str, t: str, maxCost: int) -> int:
#     ans = 0
#     l = 0
#     cost = 0
#     for r in range(len(t)):
#       cost += abs(ord(s[r]) - ord(t[r]))
#       while cost > maxCost:
#         cost -= abs(ord(s[l]) - ord(t[l]))
#         l += 1
#       if r - l + 1 > ans:
#         ans = r - l + 1
#     return ans

# Running sum
# class Solution:
#   def equalSubstring(self, s: str, t: str, maxCost: int) -> int:
#     cumsum = 0
#     arr = [0] + [cumsum := abs(ord(s[i]) - ord(t[i])) + cumsum for i in range(len(s))]
#     ans = 0
#     l = 0
#     for r in range(len(arr)):
#       while arr[r] - arr[l] > maxCost:
#         l += 1
#       if r - l > ans:
#         ans = r - l
#     return ans

# Running sum optimized
class Solution:
  def equalSubstring(self, s: str, t: str, maxCost: int) -> int:
    n = len(s)
    cumsum = [0]
    ans = 0
    l = 0
    for r in range(n + 1):
      if r < n:
        cumsum.append(cumsum[-1] + abs(ord(s[r]) - ord(t[r])))
      while cumsum[r] - cumsum[l] > maxCost:
        l += 1
      if r - l > ans:
        ans = r - l
    return ans
