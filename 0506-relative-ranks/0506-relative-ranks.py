class Solution:
  def findRelativeRanks(self, score: List[int]) -> List[str]:
    score = list(enumerate(score))
    score.sort(key = lambda x: x[1], reverse=True)
    res = [None] * len(score)
    for j in range(len(score)):
      i, _ = score[j]
      if j == 0:
        res[i] = "Gold Medal"
      elif j == 1:
        res[i] = "Silver Medal"
      elif j == 2:
        res[i] = "Bronze Medal"
      else:
        res[i] = str(j + 1)
    return res