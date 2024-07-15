class Solution:
  def isMatch(self, s: str, p: str) -> bool:
    mem = {}
    n = len(s)
    m = len(p)

    def dp(key):
      if key in mem:
        return mem[key]
      
      i, j = key
      
      if i == n and j == m:
        mem[key] = True
      elif j < m and p[j] == '*':
        mem[key] = False
        for k in range(n, i - 1, -1):
          if dp((k, j + 1)):
            mem[key] = True
            break
      elif j < m and p[j] == '?':
        mem[key] = dp((i + 1, j + 1))
      elif i < n and j < m and s[i] == p[j]:
        mem[key] = dp((i + 1, j + 1))
      else:
        mem[key] = False

      return mem[key]

    return dp((0, 0))


        