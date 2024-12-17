class Solution:
  def sumSubarrayMins(self, arr: List[int]) -> int:
    ans = 0
    count, heap = {}, []
    for r, num in enumerate(arr):
      # r pointer
      ans += num
      if num not in count:
        count[num] = 0
        heappush(heap, num)
      count[num] += 1
      # l pointer
      _count, _heap = count.copy(), heap.copy()
      for l in range(r):
        while not _count[_heap[0]]: heappop(_heap)
        ans += _heap[0]
        _count[arr[l]] -= 1
    return int(ans % (1e9 + 7))

# 3124
# ---- 
# 3    
# 31   
#  1   
# 312  
#  12  
#   2  
# 3124
#  124
#   24
#    4