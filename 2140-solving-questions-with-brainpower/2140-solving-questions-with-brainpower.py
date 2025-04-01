class Solution:
  def mostPoints(self, q: List[List[int]]) -> int:
    n = len(q)
    score = [0] * (n + 1)
    for i, [p, s] in enumerate(q):
      if i and score[i] < score[i-1]:
        score[i] = score[i-1]
      if score[j := min(n, i + s + 1)] < score[i] + p:
        score[j] = score[i] + p
    return score[n]