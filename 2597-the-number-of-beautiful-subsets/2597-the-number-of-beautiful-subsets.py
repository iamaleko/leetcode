class Solution:
  def beautifulSubsets(self, nums: List[int], k: int) -> int:
    nums.sort()
    subsets = []

    for n in nums:
      for i in range(len(subsets)):
        if (n - k) not in subsets[i]:
          subset = subsets[i].copy()
          subset.add(n)
          subsets.append(subset)
      subsets.append(set([n]))

    return len(subsets)