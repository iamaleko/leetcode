# class Solution:
#   def checkSubarraySum(self, nums: List[int], k: int) -> bool:
#     # runnning sum
#     for i in range(1, len(nums)):
#       nums[i] += nums[i - 1]
#     nums = [0] + nums

#     # good subarray
#     for w in range(2, len(nums)):
#       for l in range(len(nums) - w):
#         if not (nums[l + w] - nums[l]) % k:
#           print(l,w)
#           return True
    
#     return False

# TLE 95 case
# class Solution:
#   def checkSubarraySum(self, nums: List[int], k: int) -> bool:
#     maxVal = max(nums)
#     minWindow = max(2, k // maxVal) if maxVal else 2
    
#     # edge case, search for consecutive zeroes
#     if minWindow > len(nums) or maxVal == 0:
#       for i in range(1, len(nums)):
#         if nums[i] + nums[i - 1] == 0:
#           return True
#       return False

#     # runnning sum
#     for i in range(1, len(nums)):
#       nums[i] += nums[i - 1]
#     nums = [0] + nums

#     # good subarray
#     for window in range(minWindow, len(nums)):
#       for l in range(len(nums) - window):
#         if not (nums[l + window] - nums[l]) % k:
#           return True
    
#     return False

class Solution:
  def checkSubarraySum(self, nums: List[int], k: int) -> bool:
    s = set([0])
    nums = [0] + nums
    for i in range(2, len(nums)):
      s.add(nums[i - 2] % k)
      nums[i] += nums[i - 1]
      if nums[i] % k in s:
        return True
    return False
    

        