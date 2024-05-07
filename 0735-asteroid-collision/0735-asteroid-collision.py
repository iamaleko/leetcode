# class Solution:
#   def asteroidCollision(self, asteroids: List[int]) -> List[int]:
#     st = deque()
#     for a in asteroids:
#       if not st or a > 0 or st[-1] < 0: # append
#         st.append(a)
#       else:
#         while st:
#           if st[-1] > -a: # explode right
#             break
#           elif st[-1] < -a: # explode left and proceed
#             st.pop()
#             if not st or st[-1] < 0:
#               st.append(a)
#               break
#           elif st[-1] == -a: # explode both
#             st.pop()
#             break
#     return list(st)

class Solution:
  def asteroidCollision(self, ast: List[int]) -> List[int]:
    st = deque()
    i = 0
    ln = len(ast)
    while i < ln:
      if not st or ast[i] > 0 or st[-1] < 0: # append
        st.append(ast[i])
        i += 1
      elif st and st[-1] > -ast[i]: # explode right
        i += 1
      elif st and st[-1] < -ast[i]: # explode left and recheck
        st.pop()
      elif st and st[-1] == -ast[i]: # explode both and proceed
        st.pop()
        i += 1
    return list(st)
      
        