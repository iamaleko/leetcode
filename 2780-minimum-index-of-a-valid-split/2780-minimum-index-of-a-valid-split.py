class Solution:
  def minimumIndex(self, nums: List[int]) -> int:
    # get dominant, Boyer-Moore
    x, c = 0, 0
    for num in nums:
      if not c:
        x = num
      if x == num:
        c += 1
      else:
        c -= 1
    # find split, running sum
    l,r,n = 1 if nums[0] == x else 0,0,len(nums)
    for i in range(1, n):
      if nums[i] == x:
        r += 1
    for i in range(1, n):
      if l > i // 2 and r > (n - i) // 2:
        return i - 1
      if nums[i] == x:
        l += 1
        r -= 1
    return -1
        