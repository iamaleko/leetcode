class Solution:
  def maximumValueSum(self, nums: List[int], k: int, edges: List[List[int]]) -> int:
    h = []
    for num in nums:
      heappush(h, (-((num ^ k) - num), num ^ k, num))
    while True:
      _, axor, anum = heappop(h)
      _, bxor, bnum = heappop(h)
      if axor + bxor > anum + bnum:
        heappush(h, (-((axor ^ k) - axor), axor ^ k, axor))
        heappush(h, (-((bxor ^ k) - bxor), bxor ^ k, bxor))
      else:
        return anum + bnum + sum(map(lambda x: x[2], h))

        