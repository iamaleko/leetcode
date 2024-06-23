# class Solution:
#   def longestSubarray(self, nums: List[int], limit: int) -> int:
#     maxh = []
#     minh = []
#     ans = 0
#     l = 0
    
#     def updateHeaps(l):
#       while maxh and maxh[0][1] < l:
#         heappop(maxh)
#       while minh and minh[0][1] < l:
#         heappop(minh)

#     for r in range(len(nums)):
#       heappush(maxh, (-nums[r], r))
#       heappush(minh, (nums[r], r))
#       updateHeaps(l)
#       while maxh and minh and -maxh[0][0] - minh[0][0] > limit:
#         l += 1
#         updateHeaps(l)
#       if r - l + 1 > ans:
#         ans = r - l + 1
    
#     return ans

class Solution:
  def longestSubarray(self, nums: List[int], limit: int) -> int:
    max_st = deque()
    min_st = deque()
    l = 0
    for num in nums:
      while max_st and max_st[-1] < num:
        max_st.pop()
      while min_st and min_st[-1] > num:
        min_st.pop()
      max_st.append(num)
      min_st.append(num)
      if max_st and min_st and max_st[0] - min_st[0] > limit:
        if max_st[0] == nums[l]:
          max_st.popleft()
        if min_st[0] == nums[l]:
          min_st.popleft()
        l += 1
    return len(nums) - l