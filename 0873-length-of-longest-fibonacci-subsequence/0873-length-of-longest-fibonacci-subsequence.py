class Solution:
  def lenLongestFibSubseq(self, nums: List[int]) -> int:
    n = len(nums)
    m = {}
    ans = 0
    for i in range(n):
      # print('+', nums[i])

      for j in range(i):
        s = nums[j] + nums[i]
        if s not in m:
          m[s] = []
        m[s] += [(nums[i], 2)]
        # print('start waiting', s, '(',nums[j],'->',nums[i],')', 2)

      if nums[i] in m:
        for num, count in m[nums[i]]:
          s = num + nums[i]
          count += 1
          if s not in m:
            m[s] = []
          m[s] += [(nums[i], count)]
          # print('continue waiting', s, '(',num,'->',nums[i],')', count)
          if count > ans:
            ans = count
      # print(nums[i], m)
    return ans


# 4 -> 14 -> 18 -> 32 -> 50