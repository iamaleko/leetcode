class Solution:
  def minSum(self, nums1: List[int], nums2: List[int]) -> int:
    asum = sum(nums1)
    bsum = sum(nums2)
    azer = 0
    bzer = 0
    for num in nums1:
      if not num: azer+=1
    for num in nums2:
      if not num: bzer+=1
    if (asum+azer > bsum+bzer and bzer == 0) or (bsum+bzer > asum+azer and azer == 0):
      return -1
    return max(asum+azer, bsum+bzer)
        