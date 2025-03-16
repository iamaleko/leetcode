class Solution:
  def repairCars(self, rank: List[int], cars: int) -> int:
    ranks = Counter(rank)
    h = [(rank, rank, 1, ranks[rank]) for rank in ranks]
    heapify(h)
    while cars > 0:
      time, rank, n, count = heappop(h)
      cars -= count
      n += 1
      heappush(h, (rank * n * n, rank, n, count))
    return time