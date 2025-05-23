class Solution:
  def countSubarrays(self, nums: List[int], k: int) -> int:
    ans = 0
    l = 0
    s = 0
    for r in range(len(nums)):
      s += nums[r]
      while s * (r - l + 1) >= k:
        s -= nums[l]
        l += 1
      ans += r - l + 1
    return ans
        