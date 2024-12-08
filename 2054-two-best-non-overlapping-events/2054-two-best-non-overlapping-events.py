class Solution:
  def maxTwoEvents(self, events: List[List[int]]) -> int:
    events.sort(key = lambda x: x[0])
    heap = []
    ans = 0
    maxEndValue = 0
    for start, end, value  in events:
      ans = max(ans, value)
      while heap and heap[0][0] < start:
        maxEndValue = max(maxEndValue, heap[0][1])
        heappop(heap)
      ans = max(ans, value + maxEndValue)
      heappush(heap, (end, value))
    return ans
        