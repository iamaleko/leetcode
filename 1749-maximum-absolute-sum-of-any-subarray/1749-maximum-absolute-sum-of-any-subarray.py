class Solution:
  def maxAbsoluteSum(self, nums: List[int]) -> int:
    for i in range(1, len(nums)):
      nums[i] += nums[i - 1]
    nums += [0]
    return max(nums) - min(nums)
        
# class Solution:
#   def maxAbsoluteSum(self, nums: List[int]) -> int:
#     minSum = 0
#     maxSum = 0
#     ans = 0
#     for num in nums:
#       minSum += num
#       if minSum > 0:
#         minSum = 0
#       else:
#         ans = max(ans, abs(minSum))
#       maxSum += num
#       if maxSum < 0:
#         maxSum = 0
#       else:
#         ans = max(ans, abs(maxSum))
#     return ans