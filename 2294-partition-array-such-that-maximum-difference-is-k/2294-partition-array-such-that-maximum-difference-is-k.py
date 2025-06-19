class Solution:
  def partitionArray(self, nums: List[int], k: int) -> int:
    nums.sort()
    l, r = 0, 0
    ans = 1
    while r < len(nums):
      if nums[r] - nums[l] > k:
        l = r
        ans += 1
      else:
        r += 1
    return ans

        