class Solution:
  def maxSumOfThreeSubarrays(self, nums: List[int], k: int) -> List[int]:
    # running sum
    for i in range(1, len(nums)):
      nums[i] += nums[i - 1]
    # dp
    dpa = [(0,0)] * len(nums)
    dpb = [(0,0,0)] * len(nums)
    dpc = [(0,0,0,0)] * len(nums)
    dpa[k - 1] = (nums[k - 1], 0)
    for r in range(k, len(nums)):
      l = r - k + 1
      a = nums[r] - nums[l - 1] if l else nums[r]
      dpa[r] = (a, l) if dpa[r - 1][0] < a else dpa[r - 1]
      if l >= k:
        dpb[r] = (dpa[l - 1][0] + a, dpa[l - 1][1], l) if dpb[r - 1][0] < dpa[l - 1][0] + a else dpb[r - 1]
        dpc[r] = (dpb[l - 1][0] + a, dpb[l - 1][1], dpb[l - 1][2], l) if dpc[r - 1][0] < dpb[l - 1][0] + a else dpc[r - 1]
    return dpc[-1][1:]