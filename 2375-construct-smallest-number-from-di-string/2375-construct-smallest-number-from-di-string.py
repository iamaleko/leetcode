class Solution:
  def smallestNumber(self, pattern: str) -> str:
    n = len(pattern)
    low = 9
    nums = [low] * (n + 1)
    for i in range(n - 1, -1, -1):
      nums[i] = nums[i + 1]
      if pattern[i] == "I":
        low -= 1
        nums[i] = low
      else:
        while i < n and pattern[i] == "D":
          nums[i + 1] -= 1
          if nums[i + 1] < low:
            low = nums[i + 1]
          i += 1
    if low > 1:
      low -= 1
      for i in range(n + 1):
        nums[i] -= low
    return ''.join(list(map(str, nums)))