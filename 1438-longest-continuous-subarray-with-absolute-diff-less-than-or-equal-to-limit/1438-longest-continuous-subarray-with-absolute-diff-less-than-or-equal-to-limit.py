class Solution:
  def longestSubarray(self, nums: List[int], limit: int) -> int:
    maxh = []
    minh = []
    ans = 0
    l = 0
    
    def updateHeaps(l):
      while maxh and maxh[0][1] < l:
        heappop(maxh)
      while minh and minh[0][1] < l:
        heappop(minh)

    for r in range(len(nums)):
      heappush(maxh, (-nums[r], r))
      heappush(minh, (nums[r], r))
      updateHeaps(l)
      while maxh and minh and -maxh[0][0] - minh[0][0] > limit:
        l += 1
        updateHeaps(l)
      if r - l + 1 > ans:
        ans = r - l + 1
    
    return ans


        