class Solution:
  def largestRectangleArea(self, hs: List[int]) -> int:
    res = 0
    st = []
    hs.append(-1)
    for i in range(len(hs)):
      li = 0
      while st and hs[st[-1]] > hs[i]:
        si = st.pop()
        sw = i - st[-1] - 1 if st else i
        sh = hs[si]
        if res < sw * sh:
          res = sw * sh
      st.append(i)
    return res