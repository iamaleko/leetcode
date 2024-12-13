class Solution:
  def wonderfulSubstrings(self, word: str) -> int:
    ans, mask, count = 0, 0, [0] * (1 << 10)
    count[mask] += 1
    d = {
      'a': 1 << 0,
      'b': 1 << 1,
      'c': 1 << 2,
      'd': 1 << 3,
      'e': 1 << 4,
      'f': 1 << 5,
      'g': 1 << 6,
      'h': 1 << 7,
      'i': 1 << 8,
      'j': 1 << 9,
    }
    for ch in word:
      mask ^= d[ch]
      ans += count[mask]
      for i in range(10):
        ans += count[mask ^ (1 << i)]
      count[mask] += 1
    return ans
    
# n ** 2, TLE 58/88
# class Solution:
#   def wonderfulSubstrings(self, word: str) -> int:
#     ans = 0
#     for l in range(len(word)):
#       odd = 0
#       counter = defaultdict(int)
#       for r in range(l, len(word)):
#         counter[word[r]] += 1
#         odd += -1 if counter[word[r]] % 2 == 0 else 1
#         if odd <= 1:
#           ans += 1
#     return ans