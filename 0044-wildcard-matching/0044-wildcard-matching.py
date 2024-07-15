class Solution:
  def isMatch(self, s: str, p: str) -> bool:
    mem = {}

    def dp(key):
      if key in mem:
        return mem[key]
      
      i, j = key
      
      # print(i, j)
      if i == len(s) and j == len(p):
        mem[key] = True
      elif j < len(p) and p[j] == '*':
        mem[key] = False
        for k in range(i, len(s) + 1):
          if dp((k, j + 1)):
            mem[key] = True
            break
      elif j < len(p) and p[j] == '?':
        mem[key] = dp((i + 1, j + 1))
      elif i < len(s) and j < len(p) and s[i] == p[j]:
        mem[key] = dp((i + 1, j + 1))
      else:
        mem[key] = False

      return mem[key]

    return dp((0, 0))


        