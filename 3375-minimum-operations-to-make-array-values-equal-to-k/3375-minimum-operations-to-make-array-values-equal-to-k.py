class Solution:
  def minOperations(self, nums: List[int], k: int) -> int:
    nums.sort(reverse=True)
    if nums[-1] < k:
      return -1
    ans = 0
    nums.append(k)
    for i in range(1, len(nums)):
      if nums[i] < nums[i - 1]:
        ans += 1
    return ans
        