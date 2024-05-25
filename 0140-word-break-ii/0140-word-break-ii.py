class Solution:
  def wordBreak(self, s: str, words: List[str]) -> List[str]:
    ans = []
    def backtrack(i, sentence):
      if i == len(s):
        ans.append(sentence[1:])
      else:
        for word in words:
          j = i + len(word)
          if s[i:j] == word:
            backtrack(j, sentence + ' ' + s[i:j])
    backtrack(0, '')
    return ans
        