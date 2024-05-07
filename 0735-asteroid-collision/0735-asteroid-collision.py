class Solution:
  def asteroidCollision(self, asteroids: List[int]) -> List[int]:
    st = deque()
    for a in asteroids:
      if not st or a > 0 or st[-1] < 0:
        st.append(a)
      else:
        while st:
          if st[-1] > -a:
            break
          elif st[-1] < -a:
            st.pop()
            if not st or st[-1] < 0:
              st.append(a)
              break
          elif st[-1] == -a:
            st.pop()
            break
    return list(st)
      
        