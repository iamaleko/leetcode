class Solution:
  def minOperations(self, nums: List[int], k: int) -> int:
    heapify(nums)
    ans = 0
    while nums[0] < k:
      x = heappop(nums)
      heappushpop(nums, min(x, nums[0]) * 2 + max(x, nums[0]))
      ans += 1
    return ans
        