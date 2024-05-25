class Solution:
  def wordBreak(self, s: str, words: List[str]) -> List[str]:
    ans = []
    def backtrack(i, sentence):
      if i == len(s):
        return ans.append(sentence[1:])
      for word in words:
        if s[i:i + len(word)] == word:
          backtrack(i + len(word), sentence + ' ' + s[i:i + len(word)])
    backtrack(0, '')
    return ans
        