class Solution:
  def intersection(self, nums: List[List[int]]) -> List[int]:
    d = defaultdict(int)
    for arr in nums:
      for num in arr:
        d[num] += 1
    res = []
    for num in d:
      if d[num] == len(nums):
        res.append(num)
    res.sort()
    return res
        