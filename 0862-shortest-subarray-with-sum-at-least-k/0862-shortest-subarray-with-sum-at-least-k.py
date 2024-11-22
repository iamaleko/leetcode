# Fails on negative integers
# class Solution:
#   def shortestSubarray(self, nums: List[int], k: int) -> int:
#     if sum(nums) < k:
#       return -1

#     rs = [0]
#     ans = len(nums)
    
#     for num in nums:
#       l = 0
#       r = len(rs) - 1
#       num += rs[-1]
#       while l <= r:
#         c = l + r >> 1
#         if num - rs[c] < k:
#           r = c - 1
#         else:
#           l = c + 1
#       if r >= 0:
#         ans = min(len(rs) - r, ans)
#       rs.append(num)

#     return ans

# TLE 91/98
# class Solution:
#   def shortestSubarray(self, nums: List[int], k: int) -> int:
#     s = 0
#     rs = [[0, -1]]
#     ans = -1
    
#     for i in range(len(nums)):
#       if nums[i] >= k:
#         return 1
#       s += nums[i]
#       rs.append([s, i])
      
#       # bubble sort
#       p = len(rs) - 1
#       while (p and rs[p][0] < rs[p-1][0]):
#         if rs[p - 1][1] < rs[p][1]:
#           rs[p - 1][1] = rs[p][1]
#         rs[p], rs[p-1] = rs[p-1], rs[p]
#         p -= 1

#       l, r = 0, len(rs) - 2
#       while l <= r:
#         c = l + r >> 1
#         if s - rs[c][0] >= k:
#           l = c + 1
#           if ans == -1 or ans > i - rs[c][1]:
#             ans = i - rs[c][1]
#         else:
#           r = c - 1

#     return ans

class Solution:
  def shortestSubarray(self, nums: List[int], k: int) -> int:
    s = 0
    ans = -1
    h = [(0,-1)]
    
    for i in range(len(nums)):
      if nums[i] >= k:
        return 1

      s += nums[i]
      while s - h[0][0] >= k:
        if ans == -1 or ans > i - h[0][1]:
          ans = i - h[0][1]
        heappop(h)
      heappush(h, (s,i))

    return ans