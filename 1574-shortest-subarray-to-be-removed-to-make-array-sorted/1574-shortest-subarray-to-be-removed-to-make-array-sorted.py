class Solution:
  def findLengthOfShortestSubarray(self, arr: List[int]) -> int:
    n = len(arr)
    # left bound
    l = 0
    while l < n - 1 and arr[l + 1] >= arr[l]:
      l += 1
    # sorted
    if l == n - 1:
      return 0
    # right bound
    r = n - 1
    while r and arr[r - 1] <= arr[r]:
      r -= 1
    # search
    ans = min(n - l - 1, r)
    for l in range(0, l + 1):
      while r < n and arr[r] < arr[l]:
        r += 1
      if ans > r - l - 1:
        ans = r - l - 1
    return ans