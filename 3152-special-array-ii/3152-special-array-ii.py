class Solution:
  def isArraySpecial(self, nums: List[int], queries: List[List[int]]) -> List[bool]:
    z = 0
    check = [0] * len(nums)

    for i in range(1, len(nums)):
      z += 1
      if nums[i - 1] % 2 == nums[i] % 2:
        z = 0
      check[i] = z

    ans = []
    for f, t in queries:
      if check[t] >= t - f:
        ans.append(True)
      else:
        ans.append(False)
        
    return ans      