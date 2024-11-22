class Solution:
  def findLengthOfShortestSubarray(self, arr: List[int]) -> int:
    # left bound
    l = 0
    for i in range(1, len(arr)):
      if arr[i] >= arr[l]:
        l = i
      else:
        break
    # sorted
    if l == len(arr) - 1:
      print('sorted')
      return 0
    # right bound
    r = len(arr) - 1
    for i in range(len(arr) - 2, -1, -1):
      if arr[i] <= arr[r]:
        r = i
      else:
        break
    # search
    ans = min(len(arr) - l - 1, r)
    for l in range(0, l + 1):
      while r < len(arr) and arr[r] < arr[l]:
        r += 1
      ans = min(ans, r - l - 1)
    return ans