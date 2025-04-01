class Solution:
  def mostPoints(self, q: List[List[int]]) -> int:
    n = len(q)
    score = [0] * n
    ans = 0
    for i, [p, s] in enumerate(q):
      if i and score[i] < score[i-1]:
        score[i] = score[i-1]
      if i + s + 1 < n:
        if score[i + s + 1] < score[i] + p:
          score[i + s + 1] = score[i] + p
      elif ans < score[i] + p:
        ans = score[i] + p
    return ans