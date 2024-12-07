class Solution:
  def minimumSize(self, nums: List[int], ops: int) -> int:
    l, r = 1, max(nums)
    while l <= r:
      size = l + r >> 1
      need_ops = 0
      for num in nums:
        if num > size:
          need_ops += math.ceil(num / size) - 1
      if need_ops > ops:
        l = size + 1
      else:
        r = size - 1
    return l

# TLE 48/58
# class Solution:
#   def minimumSize(self, nums: List[int], ops: int) -> int:
#     if len(nums) == 1:
#       return math.ceil(nums[0] / (ops + 1))
#     h = [(-x, 1, x) for x in nums]
#     heapify(h)
#     while ops:
#       val, parts, total = heappop(h)
#       additional_parts = min(ops, math.ceil(total / (-h[0][0] - 1)) - parts)
#       val = -math.ceil(total / (parts + additional_parts))
#       ops -= additional_parts
#       parts += additional_parts
#       heappush(h, (val, parts, total))
#     return -h[0][0]