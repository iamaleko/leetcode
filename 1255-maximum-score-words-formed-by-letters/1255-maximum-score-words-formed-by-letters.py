class Solution:
  def maxScoreWords(self, _words: List[str], letters: List[str], _score: List[int]) -> int:
    count = defaultdict(int)
    for letter in letters:
      count[letter] += 1

    score = defaultdict(int)
    for i, v in enumerate(_score):
      score[chr(97 + i)] += v

    words = []
    for word in _words:
      wcount = defaultdict(int)
      wscore = 0
      for char in word:
        wcount[char] += 1
        wscore += score[char]
      words.append((wscore, wcount))

    def backtrack(i):
      ans = 0

      for j in range(i, len(words)):
        wscore, wcount = words[j]

        # can we use it?
        canuse = True
        for char in wcount.keys():
          if wcount[char] > count[char]:
            canuse = False
            break

        if canuse:
          if j + 1 == len(words):
            if wscore > ans:
              ans = wscore
          else:
            # lock used chars
            for char in wcount.keys():
              count[char] -= wcount[char]

            # go to the next word
            _ans = wscore + backtrack(j + 1)
            if _ans > ans:
              ans = _ans

            # unlock used chars
            for char in wcount.keys():
              count[char] += wcount[char]

      return ans

    return backtrack(0)
        