class Solution:
  def maxSumOfThreeSubarrays(self, nums: List[int], k: int) -> List[int]:
    for i in range(1, n := len(nums)):
      nums[i] += nums[i - 1]
    dpa, dpb, dpc = [(0,0)] * n, [(0,0,0)] * n, [(0,0,0,0)] * n
    dpa[k - 1] = (nums[k - 1], 0)
    for r in range(k, n):
      rr, ll, l = r - 1, r - k, r - k + 1
      a = nums[r] - nums[ll] if l else nums[r]
      dpa[r] = (a, l) if dpa[rr][0] < a else dpa[rr]
      if l >= k:
        dpb[r] = (dpa[ll][0] + a, dpa[ll][1], l) if dpb[rr][0] < dpa[ll][0] + a else dpb[rr]
        dpc[r] = (dpb[ll][0] + a, dpb[ll][1], dpb[ll][2], l) if dpc[rr][0] < dpb[ll][0] + a else dpc[rr]
    return dpc[-1][1:]