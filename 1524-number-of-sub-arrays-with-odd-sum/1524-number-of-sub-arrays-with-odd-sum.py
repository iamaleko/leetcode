class Solution:
  def numOfSubarrays(self, arr: List[int]) -> int:
    odd = even = ans = acc = 0
    for num in arr:
      acc += num
      if acc & 1:
        ans += even + 1
        odd += 1
      else:
        ans += odd
        even += 1
    return int(ans % (1e9 + 7))
      