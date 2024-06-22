# class Solution:
#   def numberOfSubarrays(self, nums: List[int], k: int) -> int:
#     s = 0
#     rs = [0] + [s := s + (num & 1) for num in nums]
#     d = defaultdict(int)
#     ans = 0
#     for num in rs:
#       if num - k in d:
#         ans += d[num - k]
#       d[num] += 1
#     return ans

class Solution:
  def numberOfSubarrays(self, nums: List[int], k: int) -> int:
    l = 0
    ans = 0
    odds = 0
    found = 0
    for num in nums:
      if num & 1:
        odds += 1
        found = 0
      while odds == k:
        found += 1
        if nums[l] & 1:
          odds -= 1
        l += 1
      ans += found
    return ans

        