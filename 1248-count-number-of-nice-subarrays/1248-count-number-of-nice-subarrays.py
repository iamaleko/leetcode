class Solution:
  def numberOfSubarrays(self, nums: List[int], k: int) -> int:
    s = 0
    rs = [0] + [s := s + (num & 1) for num in nums]
    d = defaultdict(int)
    ans = 0
    for num in rs:
      if num - k in d:
        ans += d[num - k]
      d[num] += 1
    return ans

        