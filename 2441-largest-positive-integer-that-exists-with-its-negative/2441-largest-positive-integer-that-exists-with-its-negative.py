class Solution:
  def findMaxK(self, nums: List[int]) -> int:
    st = set()
    for n in nums:
      if n < 0:
        st.add(-n)
    for n in nums:
      if n > 0 and n in st:
        return n
    return -1
        