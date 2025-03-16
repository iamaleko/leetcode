class Solution:
  def repairCars(self, rank: List[int], cars: int) -> int:
    ranks = Counter(rank)
    h = [(rank, rank, 1) for rank in ranks]
    heapify(h)
    while cars > 0:
      ans, rank, repaired = h[0]
      cars -= ranks[rank]
      repaired += 1
      heappushpop(h, (rank * repaired ** 2, rank, repaired))
    return ans