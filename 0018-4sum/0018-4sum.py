class Solution:
  def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
    nums.sort()
    ans = []
    n = len(nums)
    for a in range(n - 3):
      if nums[a] + nums[a+1] + nums[a+2] + nums[a+3] > target: break
      if nums[a] + nums[n-1] + nums[n-2] + nums[n-3] < target or a > 0 and nums[a] == nums[a-1]: continue
      for b in range(a + 1, n - 2):
        if nums[a] + nums[b] + nums[b+1] + nums[b+2] > target: break
        if nums[a] + nums[b] + nums[n-1] + nums[n-2] < target or b > a + 1 and nums[b] == nums[b-1]: continue
        for c in range(b + 1, n - 1):
          if nums[a] + nums[b] + nums[c] + nums[c+1] > target: break
          if nums[a] + nums[b] + nums[c] + nums[n-1] < target or c > b + 1 and nums[c] == nums[c-1]: continue
          for d in range(c + 1, n):
            if nums[a] + nums[b] + nums[c] + nums[d] > target: break
            if nums[a] + nums[b] + nums[c] + nums[d] < target or d > c + 1 and nums[d] == nums[d-1]: continue
            ans.append([nums[a], nums[b], nums[c], nums[d]])
    return ans