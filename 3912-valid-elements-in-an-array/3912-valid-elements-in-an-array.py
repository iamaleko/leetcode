class Solution:
  def findValidElements(self, nums: list[int]) -> list[int]:
    ans = [None for _ in nums]
    mem = -math.inf
    for i in range(len(nums)):
      if nums[i] > mem:
        ans[i] = nums[i]
        mem = max(mem, nums[i])
    mem = -math.inf
    for i in range(len(nums)-1,-1,-1):
      if nums[i] > mem:
        ans[i] = nums[i]
        mem = max(mem, nums[i])
    return list(filter(lambda x: x != None, ans))


        