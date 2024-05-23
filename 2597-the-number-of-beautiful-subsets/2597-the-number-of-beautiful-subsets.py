class Solution:
  def beautifulSubsets(self, nums: List[int], k: int) -> int:
    nums.sort()
    asets = []

    for n in nums:
      for i in range(len(asets)):
        aset = asets[i]
        if (n - k) not in aset:
          bset = aset.copy()
          bset.add(n)
          asets.append(bset)
      asets.append(set([n]))

    return len(asets)