class Solution:
  def maxProfitAssignment(self, difficulty: List[int], profit: List[int], worker: List[int]) -> int:
    jobs = list(zip(profit, difficulty))
    jobs.sort(reverse=True)
    worker.sort(reverse=True)
    ans = 0
    p = 0
    for w in worker:
      while jobs[p][1] > w:
        p += 1
        if p >= len(jobs):
          return ans
      ans += jobs[p][0]
    return ans    