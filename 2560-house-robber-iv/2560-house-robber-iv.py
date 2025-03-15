class Solution:
  def minCapability(self, nums: List[int], k: int) -> int:
    srtd = sorted(nums)
    l, r = 0, len(nums) - 1
    while l < r:
      a, b, c = 0, 0, l + r >> 1
      for num in nums:
        if num <= srtd[c]:
          a, b = b, a + 1
          if b == k:
            r = c
            break
        elif b > a:
          a = b
      else:
        l = c + 1
    return srtd[r]

# DP, TLE 50/64
# class Solution:
#   def update(self, m, n, r):
#     if r == len(m):
#       m.append(n)
#     elif m[r] > n:
#       m[r] = n
#   def minCapability(self, nums: List[int], k: int) -> int:
#     if k == 1:
#       return min(nums)
#     m2, m1, m0 = [0], [0], [0]
#     for i in range(1, len(nums)):
#       m2, m1, m0 = m1, m0, m2
#       if i > 0:
#         self.update(m0, nums[i-1], 1)
#       if i > 1:
#         self.update(m0, max(nums[i], nums[i-2]), 2)
#       for r, n in enumerate(m1):
#         self.update(m0, n, r)
#       for r, n in enumerate(m2):
#         if r + 1 <= k:
#           self.update(m0, max(n, nums[i]), r + 1)
#     return m0[k] 
