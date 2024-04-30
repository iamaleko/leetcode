# class Solution:
#   def wonderfulSubstrings(self, s: str) -> int:
#     res = 0
#     w = 1
#     mem = defaultdict(bool)
#     for w in range(1, len(s) + 1):
#       mem.clear()
#       odd = 0
#       for i in range(w - 1):
#         mem[s[i]] = not mem[s[i]]
#         odd += 1 if mem[s[i]] else -1
#       for l in range(len(s) - w + 1):
#         remove = s[l - 1] if l else None
#         add = s[l + w - 1]
#         if remove:
#           mem[remove] = not mem[remove]
#           odd += 1 if mem[remove] else -1
#         mem[add] = not mem[add] 
#         odd += 1 if mem[add] else -1
#         if odd < 2:
#           res += 1
#     return res

class Solution:
  def wonderfulSubstrings(self, word: str) -> int:
    res = 0
    mask = 0
    freq = defaultdict(int, {0: 1})
    for ch in word: 
      bit = 1 << ord(ch) - 97
      mask ^= bit
      res += freq[mask]
      freq[mask] += 1
      # print(bin(mask))

      for i in range(10):
        bit = 1 << i
        # print(bin(mask ^ bit))
        res += freq[mask ^ bit]
    # print(freq)
    return res 
      