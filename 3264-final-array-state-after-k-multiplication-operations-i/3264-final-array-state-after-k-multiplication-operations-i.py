class Solution:
  def getFinalState(self, nums: List[int], k: int, multiplier: int) -> List[int]:
    heapify(h := [t[::-1] for t in enumerate(nums)])
    for _ in range(k):
      nums[i := h[0][1]] *= multiplier
      heappushpop(h, (nums[i], i))
    return nums
        