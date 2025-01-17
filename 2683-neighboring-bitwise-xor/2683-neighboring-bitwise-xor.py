class Solution:
  def doesValidArrayExist(self, derived: List[int]) -> bool:
    for i in range(1):
      s = i
      for num in derived: i ^= num
      if i == s: return True
    return False