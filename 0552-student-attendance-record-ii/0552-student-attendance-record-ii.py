# Memory Limit Exceeded
# class Solution:
#   def checkRecord(self, n: int) -> int:
#     mem = {}
#     def dp(args):
#       i, a, l = args
#       if i == n:
#         return 1
#       if args in mem:
#         return mem[args]
#       i += 1
#       mem[args] = dp((i, a, 0)) # P
#       if a < 1: mem[args] += dp((i, a + 1, 0)) # A
#       if l < 2: mem[args] += dp((i, a, l + 1)) # L
#       mem[args] = int(mem[args] % (1e9 + 7))
#       return mem[args]
#     ans = dp((0, 0, 0))
#     return ans

class Solution:
  def checkRecord(self, n: int) -> int:
    mod = int(1e9 + 7)
    prefixes = defaultdict(int)
    prefixes[(0, 0)] = 1

    for i in range(n):
      _prefixes = defaultdict(int)
      for (a, l), s in prefixes.items():
        s %= mod
        _prefixes[(a, 0)] += s
        if a < 1: _prefixes[(a + 1, 0)] += s
        if l < 2: _prefixes[(a, l + 1)] += s
      prefixes = _prefixes

    return sum(prefixes.values()) % mod