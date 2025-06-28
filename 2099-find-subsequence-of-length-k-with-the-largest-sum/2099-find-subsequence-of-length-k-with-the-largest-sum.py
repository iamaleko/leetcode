class Solution:
  def maxSubsequence(self, nums: List[int], k: int) -> List[int]:
    return [x for _, x in sorted(list(sorted(enumerate(nums), key=lambda x: x[1], reverse=True))[0:k], key=lambda x: x[0])]
        