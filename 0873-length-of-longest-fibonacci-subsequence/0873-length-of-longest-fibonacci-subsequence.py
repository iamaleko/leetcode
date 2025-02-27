class Solution:
  def lenLongestFibSubseq(self, nums: List[int]) -> int:
    n = len(nums)
    m = defaultdict(dict)
    ans = 0
    for i in range(n):

      for j in range(i):
        s = nums[j] + nums[i]
        if nums[i] not in m[s]:
          m[s][nums[i]] = 2

      if nums[i] in m:
        for num in m[nums[i]]:
          count = m[nums[i]][num] + 1
          s = num + nums[i]
          if nums[i] not in m[s] or m[s][nums[i]] < count:
            m[s][nums[i]] = count
            if count >= ans: ans = count

    return ans