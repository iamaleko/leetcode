class Solution:
  def findTargetSumWays(self, nums: List[int], target: int) -> int:
    curr = defaultdict(int)
    curr[-nums[0]] += 1
    curr[+nums[0]] += 1
    for i in range(1, len(nums)):
      prev, curr = curr, defaultdict(int)
      for val, count in prev.items():
        curr[val + nums[i]] += count
        curr[val - nums[i]] += count
    return curr[target] if target in curr else 0