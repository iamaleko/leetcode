class Solution:
  def lenLongestFibSubseq(self, nums: List[int]) -> int:
    n = len(nums)
    m = {}
    ans = 0
    for i in range(n):
      for j in range(i):
        s = nums[j] + nums[i]
        if s not in m: m[s] = []
        m[s].append((nums[i], 2))
      if nums[i] in m:
        for num, count in m[nums[i]]:
          s = num + nums[i]
          if s not in m: m[s] = []
          m[s].append((nums[i], count + 1))
          if count >= ans: ans = count + 1
    return ans