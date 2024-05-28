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

# Running sum v2
# class Solution:
#   def equalSubstring(self, s: str, t: str, maxCost: int) -> int:
#     q = deque([0])
#     ans = 1
#     cumsum = 0
#     for i in range(len(s)):
#       q.append(cumsum := cumsum + abs(ord(s[i]) - ord(t[i])))
#       while q[-1] - q[0] > maxCost:
#         q.popleft()
#       if len(q) > ans:
#         ans = len(q)
#     return ans - 1

# Running sum v3
# class Solution:
#   def equalSubstring(self, s: str, t: str, maxCost: int) -> int:
#     cumsum = [0]
#     ans = -1
#     l = 0
#     for r in range(len(s)):
#       cumsum.append(cumsum[-1] + abs(ord(s[r]) - ord(t[r])))
#       while cumsum[-1] - cumsum[l] > maxCost:
#         l += 1
#       if r - l > ans:
#         ans = r - l
#     return ans + 1

# Running sum v4
class Solution:
  def equalSubstring(self, s: str, t: str, maxCost: int) -> int:
    ans = -1
    j = 0
    l = 0
    r = 0
    for i in range(len(s)):
      r += abs(ord(s[i]) - ord(t[i]))
      while r - l > maxCost:
        l += abs(ord(s[j]) - ord(t[j]))
        j += 1
      if i - j > ans:
        ans = i - j
    return ans + 1
