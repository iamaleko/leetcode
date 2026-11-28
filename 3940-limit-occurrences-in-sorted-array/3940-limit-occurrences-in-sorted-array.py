class Solution:
  def limitOccurrences(self, nums: list[int], k: int) -> list[int]:
    offset, rep = 0, 0
    for i in range(1, len(nums)):
      if nums[i] != nums[i - 1 - offset]:
        rep = 0
      else:
        rep += 1
        if rep >= k:
          offset += 1
      if offset:
        nums[i - offset] = nums[i]
    return nums if not offset else nums[:-offset]

        