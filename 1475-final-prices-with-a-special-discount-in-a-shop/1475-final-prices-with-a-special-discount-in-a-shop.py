class Solution:
  # O(n log n)
  def finalPrices(self, prices: List[int]) -> List[int]:
    mst = []
    for i in range(len(prices) - 1, -1, -1):
      price = prices[i]

      # binary search in monotonic stack
      l, r = 0, len(mst) - 1
      while l <= r:
        c = l + r >> 1
        if mst[c] <= price:
          l = c + 1
        else:
          r = c - 1
      if r >= 0:
        prices[i] -= mst[r]

      # add to monotonic stack
      while mst and mst[-1] >= price:
        mst.pop()
      mst.append(price)
      
    return prices

        