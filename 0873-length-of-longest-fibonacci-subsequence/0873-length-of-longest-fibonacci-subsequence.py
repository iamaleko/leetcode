class Solution:
  def lenLongestFibSubseq(self, nums: List[int]) -> int:
    n = len(nums)
    m = {}
    ans = 0
    for i in range(n):
      for j in range(i):
        s = nums[j] + nums[i]
        if s not in m:
          m[s] = {}
        if nums[i] not in m[s]:
          m[s][nums[i]] = 2
      if nums[i] in m:
        for num in m[nums[i]]:
          count = m[nums[i]][num] + 1
          s = num + nums[i]
          if s not in m or nums[i] not in m[s] or m[s][nums[i]] < count:
            if s not in m:
              m[s] = {}
            m[s][nums[i]] = count
            ans = max(ans, count)
    return ans