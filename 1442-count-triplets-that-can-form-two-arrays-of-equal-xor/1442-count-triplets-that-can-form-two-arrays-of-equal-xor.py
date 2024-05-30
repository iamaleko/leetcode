class Solution:
  def countTriplets(self, arr: List[int]) -> int:
    ans = 0
    for i in range(len(arr)):
      for j in range(i + 1, len(arr)):
        for k in range(j, len(arr)):
          if arr[i] ^ arr[k] == 0 if j == k else arr[i] ^ arr[j] ^ arr[k] == 0:
            ans += 2 if j != k else 1
    return ans
        