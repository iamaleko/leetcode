class Solution:
  def mostPoints(self, q: List[List[int]]) -> int:
    n = len(q)
    score = [0] * (n + 1)
    for i in range(n):
      if i and score[i] < score[i-1]:
        score[i] = score[i-1]
      if score[s := min(n, i + q[i][1] + 1)] < score[i] + q[i][0]:
        score[s] = score[i] + q[i][0]
    return score[n]