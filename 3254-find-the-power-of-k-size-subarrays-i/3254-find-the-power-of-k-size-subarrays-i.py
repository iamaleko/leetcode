class Solution:
  def resultsArray(self, nums: List[int], k: int) -> List[int]:
    ans = []
    st = []
    for i in range(len(nums)):
      if st and st[-1] != nums[i] - 1:
        st.clear()
      st.append(nums[i])
      if i + 1 >= k:
        ans.append(-1 if len(st) < k else st[-1])
    return ans