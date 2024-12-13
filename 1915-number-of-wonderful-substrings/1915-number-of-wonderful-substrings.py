class Solution:
  def wonderfulSubstrings(self, word: str) -> int:
    count = [0] * (1 << 10)
    ans, mask = 0, 0
    count[mask] += 1
    for ch in word:
      mask ^= 1 << (ord(ch) - 97)
      ans += count[mask]
      for i in range(10):
        ans += count[mask ^ (1 << i)]
      count[mask] += 1
    return ans
    

# TLE 58/88
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
