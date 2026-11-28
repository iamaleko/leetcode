class Solution:
  def minimumSwaps(self, nums: list[int]) -> int:
    return nums[:-nums.count(0)].count(0)
    # ans = 0
    # for num in nums:
    #   if num == 0:
    #     ans += 1
    # for i in range(len(nums) - ans, len(nums)):
    #   if nums[i] == 0:
    #     ans -= 1
    # return ans
        