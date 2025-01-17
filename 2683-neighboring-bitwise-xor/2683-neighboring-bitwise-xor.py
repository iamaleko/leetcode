# class Solution:
#   def doesValidArrayExist(self, derived: List[int]) -> bool:
#     for start, current in ((0, 0), (1, 1)):
#       for num in derived: current ^= num
#       if current == start: return True
#     return False

class Solution:
  def doesValidArrayExist(self, derived: List[int]) -> bool:
    xor = 0
    for num in derived: xor ^= num
    return xor ^ 0 == 0 or xor ^ 1 == 1