class KthLargest:
  def __init__(self, k: int, nums: List[int]):
    self.h = []
    self.k = k
    for num in nums:
      self.add(num)      

  def add(self, num: int) -> int:
    heappush(self.h, num)
    if len(self.h) > self.k:
      heappop(self.h)
    return self.h[0]