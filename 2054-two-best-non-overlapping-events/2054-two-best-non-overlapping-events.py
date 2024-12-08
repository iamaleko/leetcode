class Solution:
  def maxTwoEvents(self, events: List[List[int]]) -> int:
    events.sort(key = lambda x: x[0])
    heap = []
    ans = 0
    maxEndValue = 0
    for start, end, value  in events:
      if ans < value: ans = value
      while heap and heap[0][0] < start:
        if maxEndValue < heap[0][1]: maxEndValue = heap[0][1]
        heappop(heap)
      if ans < value + maxEndValue: ans = value + maxEndValue
      heappush(heap, (end, value))
    return ans
        