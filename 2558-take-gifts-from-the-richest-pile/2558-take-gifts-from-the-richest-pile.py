class Solution:
  def pickGifts(self, gifts: List[int], k: int) -> int:
    ans = sum(gifts)
    h = [-x for x in gifts]
    heapify(h)
    while h and k:
      val = -heappop(h)
      leave = math.floor(math.sqrt(val))
      ans -= val - leave
      heappush(h, -leave)
      k -= 1
    return ans
        