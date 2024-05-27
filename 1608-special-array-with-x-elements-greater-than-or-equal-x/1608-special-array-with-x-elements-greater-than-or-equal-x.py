class Solution:
  def specialArray(self, nums: List[int]) -> int:
    nums.sort()
    n = len(nums)
    print(nums)
    for i in range(n):
      if n - i <= nums[i] and (not i or nums[i - 1] < n - i):
        return n - i
    return -1
        