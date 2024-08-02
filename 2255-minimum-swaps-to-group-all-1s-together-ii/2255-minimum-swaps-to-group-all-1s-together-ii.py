class Solution:
  def minSwaps(self, nums: List[int]) -> int:
    n = len(nums)

    # determine window size
    ones = 0
    for d in nums:
      if d == 1:
        ones += 1
    
    if ones == n or ones == 0:
      return 0
    
    # find window with less zeroes
    zeroes = 0
    for i in range(ones):
      if nums[i] == 0:
        zeroes += 1
    ans = zeroes
    for i in range(n):
      if nums[i] == 0:
        zeroes -= 1
      if nums[(i + ones) % n] == 0:
        zeroes += 1
      if zeroes < ans:
        ans = zeroes

    return ans
        