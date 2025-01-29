class Solution:
  def threeSum(self, nums: List[int]) -> List[List[int]]:
    r = len(nums)-1
    ans = []
    nums.sort()
    for l in range(r-1):
      if not l or nums[l] != nums[l-1]:
        target, j, k = -nums[l], l+1, r
        while j < k:
          if nums[j] + nums[k] == target:
            if nums[j] != nums[j]-1 and (k == r or nums[k] != nums[k+1]):
              ans.append([nums[l], nums[j], nums[k]])
          if nums[j] + nums[k] < target:
            j += 1
          else:
            k -= 1
    return ans
