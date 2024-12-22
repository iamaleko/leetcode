class Solution:
  def leftmostBuildingQueries(self, heights: List[int], queries: List[List[int]]) -> List[int]:
    # sort queries
    for i in range(len(queries)):
      if queries[i][0] > queries[i][1]:
        queries[i][0], queries[i][1] = queries[i][1], queries[i][0]
      queries[i].append(i)
    queries.sort(key = lambda x: x[1], reverse = True)
    
    # perform queries
    ans = [0] * len(queries)
    st = []
    j = len(heights) - 1
    for l, r, i in queries:
      # update st
      while j >= r:
        height = (heights[j], j)
        j -= 1
        while st and st[-1][0] <= height[0]:
          st.pop()
        st.append(height)

      # search building
      if l == r or heights[r] > heights[l]:
        ans[i] = r
      else:
        l, r, h = 0, len(st) - 1, max(heights[l], heights[r])
        while l <= r:
          c = l + r >> 1
          if st[c][0] > h:
            l = c + 1
          else:
            r = c - 1
        if r == -1:
          ans[i] = -1
        else:
          ans[i] = st[r][1]

    return ans