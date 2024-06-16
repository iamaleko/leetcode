# class Solution:
#   def minPatches(self, nums: List[int], n: int) -> int:
#     # sums set
#     sums = set()
#     for num in nums:
#       extention = set()
#       for item in sums:
#         extention.add(item + num)
#       extention.add(num)
#       sums.update(extention)
    
#     h = list(sums)
#     heapify(h)

#     ans = 0
#     peak = 0
#     for i in range(1, n + 1):
#       while h and h[0] < i:
#         peak = heappop(h)

#       if h and i == h[0]: # ok
#         continue
#       else: # need patch
#         patch = i
#         peak = patch
#         extention = set()
#         for item in sums:
#           extention.add(item + patch)
#           heappush(h, item + patch)
#         extention.add(patch)
#         sums.update(extention)
#         ans += 1
#         # print(i, peak, h[0] if h else 0, sums, 'add patch', patch)
        
#     return ans

class Solution:
  def minPatches(self, nums: List[int], n: int) -> int:
    ans = 0
    s = 0

    for num in nums:
      while s < n and num - s > 1:
        s += s + 1
        ans += 1
      s += num
      last = num
    
    while s < n:
      s += s + 1
      ans += 1
      
    return ans