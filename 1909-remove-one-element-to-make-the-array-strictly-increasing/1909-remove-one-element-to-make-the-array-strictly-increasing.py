class Solution:
  def canBeIncreasing(self, nums: List[int]) -> bool:
    i = 0
    skip = 0
    last = 0
    while i < len(nums) - 1:
      # print(f"check {nums[i]} and {nums[i + 1]}")
      if nums[i] < nums[i + 1] and last < nums[i]:
        last = nums[i]
      elif not skip and (i == len(nums) - 2 or i + 2 < len(nums) and nums[i] < nums[i + 2]): # remove right: 105,924,32,968
        skip += 1
        last = nums[i]
        # print(f"skip right {nums[i + 1]}")
        i += 1
      elif not skip and nums[i + 1] > last and (i + 2 == len(nums) or nums[i + 1] < nums[i + 2]): # remove left: 10,5,7
        skip += 1
        # print(f"skip left {nums[i]}")
      else:
        # print(f"failed on {nums[i]}")
        return False
      i += 1

    return skip < 2

