# class Solution:
#   def isMatch(self, s: str, p: str) -> bool:
#     mem = {}
#     n = len(s)
#     m = len(p)

#     def dp(key):
#       if key in mem:
#         return mem[key]
      
#       i, j = key
      
#       if i == n and j == m:
#         mem[key] = True
#       elif j < m and p[j] == '*':
#         mem[key] = False
#         for k in range(i, n + 1):
#           if dp((k, j + 1)):
#             mem[key] = True
#             break
#       elif j < m and p[j] == '?':
#         mem[key] = dp((i + 1, j + 1))
#       elif i < n and j < m and s[i] == p[j]:
#         mem[key] = dp((i + 1, j + 1))
#       else:
#         mem[key] = False

#       return mem[key]

#     return dp((0, 0))

class Solution:
  def isMatch(self, s: str, p: str) -> bool:
    i, j, star_i, star_j = 0, 0, -1, -1
    while i < len(s):
      if j < len(p) and (s[i] == p[j] or p[j] == '?'):
        i += 1
        j += 1
      elif j < len(p) and p[j] == '*':
        star_i = i
        star_j = j + 1
        j += 1
      elif star_i != -1:
        star_i += 1
        i = star_i
        j = star_j
      else:
        return False

    return all([ch == '*' for ch in p[j:]])