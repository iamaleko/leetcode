# class Solution:
#   def doesValidArrayExist(self, derived: List[int]) -> bool:
#     for start, current in ((0, 0), (1, 1)):
#       for num in derived: current ^= num
#       if current == start: return True
#     return False

class Solution:
  def doesValidArrayExist(self, derived: List[int]) -> bool:
    xor = reduce(lambda a, b: a ^ b, derived)
    return xor ^ 0 == 0 or xor ^ 1 == 1