class Solution:
  def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
    candidates.sort()
    ans = []

    def backtrack(j, target, path):
      if target < 0:
        return
      if target == 0:
        ans.append(path)
        return
      for i in range(j, len(candidates)):
        if i > j and candidates[i] == candidates[i - 1]:
          continue
        backtrack(i + 1, target - candidates[i], path + [candidates[i]])

    backtrack(0, target, [])

    return ans