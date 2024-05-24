# class Solution:
#   def maxScoreWords(self, _words: List[str], letters: List[str], _score: List[int]) -> int:
#     count = defaultdict(int)
#     for letter in letters:
#       count[letter] += 1

#     score = defaultdict(int)
#     for i, v in enumerate(_score):
#       score[chr(97 + i)] += v

#     words = []
#     for word in _words:
#       wcount = defaultdict(int)
#       wscore = 0
#       for char in word:
#         wcount[char] += 1
#         wscore += score[char]
#       words.append((wscore, wcount))

#     def backtrack(i):
#       ans = 0

#       for j in range(i, len(words)):
#         wscore, wcount = words[j]

#         # can we use it?
#         canuse = True
#         for char in wcount.keys():
#           if wcount[char] > count[char]:
#             canuse = False
#             break

#         if canuse:
#           if j + 1 == len(words):
#             if wscore > ans:
#               ans = wscore
#           else:
#             # lock used chars
#             for char in wcount.keys():
#               count[char] -= wcount[char]

#             # go to the next word
#             _ans = wscore + backtrack(j + 1)
#             if _ans > ans:
#               ans = _ans

#             # unlock used chars
#             for char in wcount.keys():
#               count[char] += wcount[char]

#       return ans

#     return backtrack(0)

class Solution:
  def maxScoreWords(self, _words: List[str], letters: List[str], score: List[int]) -> int:
    count = [0] * 32
    for letter in letters:
      count[ord(letter) - 97] += 1

    words = []
    for word in _words:
      wcount = [0] * 32
      wscore = 0
      for letter in word:
        wcount[ord(letter) - 97] += 1
        wscore += score[ord(letter) - 97]
      words.append((wscore, wcount))

    n = len(words)


    def backtrack(i):
      ans = 0
      for j in range(i, n):
        wscore, wcount = words[j]

        # can we use it?
        canuse = True
        for char in range(32):
          if wcount[char] > count[char]:
            canuse = False
            break

        if canuse:
          if j + 1 == n:
            ans = max(ans, wscore)
          else:
            # lock used chars
            for char in range(32):
              count[char] -= wcount[char]

            # go to the next word
            ans = max(ans, wscore + backtrack(j + 1))

            # unlock used chars
            for char in range(32):
              count[char] += wcount[char]

      return ans

    return backtrack(0)
        