class Solution:
  def repairCars(self, rank: List[int], cars: int) -> int:
    ranks = Counter(rank)
    h = [(rank, rank) for rank in ranks]
    heapify(h)
    while cars > 0:
      ans, rank = h[0]
      cars -= ranks[rank]
      heappushpop(h, (rank * (math.sqrt(ans / rank) + 1) ** 2, rank))
    return int(ans)